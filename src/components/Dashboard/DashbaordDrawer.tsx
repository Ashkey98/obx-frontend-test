import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

type Anchor = "left";

interface TemporaryDrawerProps {
  data: Array<any>;
  view: String;
  setView: any;
}

export default function TemporaryDrawer({ data, view, setView }: TemporaryDrawerProps) {
  const [state, setState] = React.useState({
    left: false,
  });
  const [checked, setChecked] = React.useState(false);
  const buyerMenuIcons = data[0];
  const buyerMenuItems = data[1];

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  const handleMenuItemClick = (item: any) => {
    setView(item);
    setChecked(false);
  };

  const toggleDrawer =
    (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, true)}
    >
      <List>
        {buyerMenuItems.map((item: any, index: React.Key) => (
          <React.Fragment key={index}>
            <ListItem
              onClick={() =>
                typeof item === "object" ? handleChange() : handleMenuItemClick(item)
              }
              button
            >
              {typeof item !== "object" ? (
                <>
                  <ListItemIcon>{buyerMenuIcons[index]}</ListItemIcon>
                  <ListItemText primary={item} />
                </>
              ) : (
                <>
                  <ListItemIcon>{buyerMenuIcons[index]}</ListItemIcon>
                  <ListItemText primary={item.name} />
                  {typeof item === "object" ? (
                    checked ? (
                      <KeyboardArrowDownIcon />
                    ) : (
                      <KeyboardArrowRightIcon />
                    )
                  ) : null}
                </>
              )}
            </ListItem>
            <Collapse in={checked}>
              {typeof item === "object"
                ? item.options.map((data: string, index: React.Key) => {
                    return (
                      <ListItem key={index}>
                        <ListItemIcon>{<TextSnippetIcon />}</ListItemIcon>
                        <ListItemText primary={data} />
                      </ListItem>
                    );
                  })
                : null}
            </Collapse>
          </React.Fragment>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        display: {
          xs: "block",
          lg: "none",
        },
        visibility: {
          xs: "visible",
          lg: "hidden",
        },
      }}
    >
      {(["left"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon />
          </Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </Box>
  );
}
