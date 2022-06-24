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
<<<<<<< HEAD
=======
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
>>>>>>> initial commit
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
<<<<<<< HEAD
=======
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
>>>>>>> initial commit

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

<<<<<<< HEAD
  const [checked, setChecked] = React.useState(false);
  const [checked1, setChecked1] = React.useState(false);
  const menuOptions = data[0];

  const handleChange = () => {
    setChecked(!checked);
  };

  const handleChange1 = () => {
    setChecked1(!checked1);
  };
  const handleMenuItemClick = (item: string) => {
    setView(item);
    setChecked(false);
  };

  const handleMenuItemClick1 = (item: string) => {
    setView(item);
  };

=======
>>>>>>> initial commit
  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, true)}
    >
      <List>
<<<<<<< HEAD
        {menuOptions.map((item: any, index: React.Key) => (
          <React.Fragment key={index}>
            <ListItem
              onClick={() => {
                item.length === 2 ? handleMenuItemClick(item[0]) : handleChange();
              }}
              button
            >
              <ListItemIcon
                sx={{
                  "&.MuiListItemIcon-root": {
                    minWidth: "auto",
                    paddingRight: "5px",
                  },
                }}
              >
                {item[1]}
              </ListItemIcon>
              <ListItemText primary={item[0]} />
              {item.length === 3 ? (
                checked ? (
                  <KeyboardArrowDownIcon />
                ) : (
                  <KeyboardArrowRightIcon />
                )
              ) : null}
            </ListItem>
            <Collapse in={checked}>
              <Box
                sx={{
                  backgroundColor: "rgba(0,0,0,0.03)",
                  paddingLeft: "10px",
                }}
              >
                {item.length === 3
                  ? item[2].map((data: any, index: React.Key) => {
                      return (
                        <React.Fragment key={index}>
                          <ListItem
                            onClick={() => {
                              data.length === 2 ? handleMenuItemClick(data[0]) : handleChange1();
                            }}
                          >
                            <ListItemIcon
                              sx={{
                                "&.MuiListItemIcon-root": {
                                  minWidth: "auto",
                                  paddingRight: "5px",
                                },
                              }}
                            >
                              {data[1]}
                            </ListItemIcon>
                            <ListItemText primary={data[0]} />
                            {data.length === 3 ? (
                              checked1 ? (
                                <KeyboardArrowDownIcon />
                              ) : (
                                <KeyboardArrowRightIcon />
                              )
                            ) : null}
                          </ListItem>
                          <Collapse in={checked1}>
                            <Box
                              sx={{
                                paddingLeft: "10px",
                              }}
                            >
                              {data.length === 3
                                ? data[2].map((data1: any, index: React.Key) => {
                                    return (
                                      <ListItem
                                        onClick={() => {
                                          handleMenuItemClick1(data1[0]);
                                        }}
                                        key={index}
                                      >
                                        <ListItemIcon
                                          sx={{
                                            "&.MuiListItemIcon-root": {
                                              minWidth: "auto",
                                              paddingRight: "5px",
                                            },
                                          }}
                                        >
                                          {data1[1]}
                                        </ListItemIcon>
                                        <ListItemText primary={data1[0]} />
                                      </ListItem>
                                    );
                                  })
                                : null}
                            </Box>
                          </Collapse>
                        </React.Fragment>
                      );
                    })
                  : null}
              </Box>
=======
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
>>>>>>> initial commit
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
