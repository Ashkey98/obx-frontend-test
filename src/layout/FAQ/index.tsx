import { Typography } from "@mui/material";
import React from "react";
import Accordions from "../../components/Accordion";
import ContainerWrapper from "../../components/ContainerWrapper";

const FAQ = () => {
  const faqData = [
    {
      title: "How OBX works?",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias id praesentium quibusdam. Necessitatibus voluptatem ducimus dolorum incidunt ratione eveniet beatae. Repudiandae, Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis veritatis repudiandae odit qui modi possimus exercitationem, itaque dicta perferendis at? optio eos dolores impedit nesciunt repellat velit iusto numquam.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, accusantium et at, facere, placeat maiores porro dicta tempora architecto eos cum libero illo! Repellendus quia laborum dolores magni. Officia, ratione.",
    },
    {
      title: "How OBX Generator works?",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias id praesentium quibusdam. Necessitatibus voluptatem ducimus dolorum incidunt ratione eveniet beatae. Repudiandae, Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis veritatis repudiandae odit qui modi possimus exercitationem, itaque dicta perferendis at? optio eos dolores impedit nesciunt repellat velit iusto numquam.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, accusantium et at, facere, placeat maiores porro dicta tempora architecto eos cum libero illo! Repellendus quia laborum dolores magni. Officia, ratione.",
    },
    {
      title: "Working Process of OBX?",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias id praesentium quibusdam. Necessitatibus voluptatem ducimus dolorum incidunt ratione eveniet beatae. Repudiandae, Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis veritatis repudiandae odit qui modi possimus exercitationem, itaque dicta perferendis at? optio eos dolores impedit nesciunt repellat velit iusto numquam.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, accusantium et at, facere, placeat maiores porro dicta tempora architecto eos cum libero illo! Repellendus quia laborum dolores magni. Officia, ratione.",
    },
    {
      title: "Rules and Regulations of OBX?",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias id praesentium quibusdam. Necessitatibus voluptatem ducimus dolorum incidunt ratione eveniet beatae. Repudiandae, Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis veritatis repudiandae odit qui modi possimus exercitationem, itaque dicta perferendis at? optio eos dolores impedit nesciunt repellat velit iusto numquam.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, accusantium et at, facere, placeat maiores porro dicta tempora architecto eos cum libero illo! Repellendus quia laborum dolores magni. Officia, ratione.",
    },
    {
      title: "Buyer Process in OBX?",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias id praesentium quibusdam. Necessitatibus voluptatem ducimus dolorum incidunt ratione eveniet beatae. Repudiandae, Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis veritatis repudiandae odit qui modi possimus exercitationem, itaque dicta perferendis at? optio eos dolores impedit nesciunt repellat velit iusto numquam.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, accusantium et at, facere, placeat maiores porro dicta tempora architecto eos cum libero illo! Repellendus quia laborum dolores magni. Officia, ratione.",
    },
  ];

  return (
    <>
      <ContainerWrapper>
        <>
          {faqData.map((faq, index) => {
            return (
              <Accordions key={index} title={faq.title}>
                <Typography>{faq.info}</Typography>
              </Accordions>
            );
          })}
        </>
      </ContainerWrapper>
    </>
  );
};

export default FAQ;
