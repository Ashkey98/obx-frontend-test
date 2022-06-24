import React from "react";
import { Box } from "@mui/material";
import TPtitle from "./utls/TPtitle";
import TPBox from "./utls/TPBox";
import { flexColumn, TPTypography } from "../../styles/styles";
import TPButtons from "./utls/TPButtons";
import TPContainer from "./utls/TPContainer";

interface TenderDetailsFullProps {
  setView: any;
}

const TenderDetailsFull = ({ setView }: TenderDetailsFullProps) => {
  return (
    <TPContainer>
      <Box
        sx={{
          ...flexColumn,
          gap: "50px",
        }}
      >
        <Box>
          <TPtitle title="Tender Detials" />
          <TPBox>
            <TPTypography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi, at ad ut nobis
              animi quasi beatae explicabo voluptates eveniet hic consequuntur cumque amet error
              possimus. Eos ab ducimus accusantium.
            </TPTypography>
            <TPTypography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi, at ad ut nobis
              animi quasi beatae explicabo voluptates eveniet hic consequuntur cumque amet error
              possimus. Eos ab ducimus accusantium.
            </TPTypography>
            <TPTypography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi, at ad ut nobis
              animi quasi beatae explicabo voluptates eveniet hic consequuntur cumque amet error
              possimus. Eos ab ducimus accusantium.
            </TPTypography>
            <TPTypography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi, at ad ut nobis
              animi quasi beatae explicabo voluptates eveniet hic consequuntur cumque amet error
              possimus. Eos ab ducimus accusantium.
            </TPTypography>
          </TPBox>
        </Box>

        <Box>
          <TPtitle title="Timeline" />
          <TPBox>
            <TPTypography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi, at ad ut nobis
              animi quasi beatae explicabo voluptates eveniet hic consequuntur cumque amet error
              possimus. Eos ab ducimus accusantium.
            </TPTypography>

            <TPTypography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi, at ad ut nobis
              animi quasi beatae explicabo voluptates eveniet hic consequuntur cumque amet error
              possimus. Eos ab ducimus accusantium. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Reiciendis nihil vitae velit nobis modi nulla excepturi perferendis
              quos voluptatem dolores consectetur illo iure placeat provident quisquam accusamus,
              distinctio rem consequatur.
            </TPTypography>
          </TPBox>
        </Box>

        <Box>
          <TPtitle title="Annexure 1" />
          <TPBox>
            <TPTypography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi, at ad ut nobis
              animi quasi beatae explicabo voluptates eveniet hic consequuntur cumque amet error
              possimus. Eos ab ducimus accusantium.
            </TPTypography>

            <TPTypography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi, at ad ut nobis
              animi quasi beatae explicabo voluptates eveniet hic consequuntur cumque amet error
              possimus. Eos ab ducimus accusantium. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Reiciendis nihil vitae velit nobis modi nulla excepturi perferendis
              quos voluptatem dolores consectetur illo iure placeat provident quisquam accusamus,
              distinctio rem consequatur.
            </TPTypography>
          </TPBox>
        </Box>

        <Box>
          <TPtitle title="Annexure 2" />
          <TPBox>
            <TPTypography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi, at ad ut nobis
              animi quasi beatae explicabo voluptates eveniet hic consequuntur cumque amet error
              possimus. Eos ab ducimus accusantium.
            </TPTypography>

            <TPTypography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi, at ad ut nobis
              animi quasi beatae explicabo voluptates eveniet hic consequuntur cumque amet error
              possimus. Eos ab ducimus accusantium. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Reiciendis nihil vitae velit nobis modi nulla excepturi perferendis
              quos voluptatem dolores consectetur illo iure placeat provident quisquam accusamus,
              distinctio rem consequatur.
            </TPTypography>

            <TPTypography>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure inventore, fugit omnis
              minima tempora molestias maxime eius similique delectus iusto id earum quos.
            </TPTypography>
          </TPBox>
        </Box>

        <Box>
          <TPtitle title="Non-Disclosure Agreement (NDA)" />
          <TPBox>
            <TPTypography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi, at ad ut nobis
              animi quasi beatae explicabo voluptates eveniet hic consequuntur cumque amet error
              possimus. Eos ab ducimus accusantium.
            </TPTypography>

            <TPTypography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi, at ad ut nobis
              animi quasi beatae explicabo voluptates eveniet hic consequuntur cumque amet error
              possimus. Eos ab ducimus accusantium. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Reiciendis nihil vitae velit nobis modi nulla excepturi perferendis
              quos voluptatem dolores consectetur illo iure placeat provident quisquam accusamus,
              distinctio rem consequatur.
            </TPTypography>

            <TPTypography>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure inventore, fugit omnis
              minima tempora molestias maxime eius similique delectus iusto id earum quos.
            </TPTypography>
          </TPBox>
        </Box>

        <Box>
          <TPtitle title="Acceptance of terms" />
          <TPBox>
            <TPTypography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi, at ad ut nobis
              animi quasi beatae explicabo voluptates eveniet hic consequuntur cumque amet error
              possimus. Eos ab ducimus accusantium.
            </TPTypography>

            <TPTypography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi, at ad ut nobis
              animi quasi beatae explicabo voluptates eveniet hic consequuntur cumque amet error
              possimus. Eos ab ducimus accusantium. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Reiciendis nihil vitae velit nobis modi nulla excepturi perferendis
              quos voluptatem dolores consectetur illo iure placeat provident quisquam accusamus,
              distinctio rem consequatur.
            </TPTypography>

            <TPTypography>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure inventore, fugit omnis
              minima tempora molestias maxime eius similique delectus iusto id earum quos.
            </TPTypography>
          </TPBox>
        </Box>
        <Box>
          <TPButtons setView={setView} data={["Prev", "Participate", "", "StepsToParticipate"]} />
        </Box>
      </Box>
    </TPContainer>
  );
};

export default TenderDetailsFull;
