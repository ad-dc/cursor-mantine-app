import React from "react";
import { Accordion as MantineAccordion, AccordionProps as MantineAccordionProps } from "@mantine/core@7";

export interface DSAccordionProps extends MantineAccordionProps { makeId?: string }

const BaseAccordion: React.FC<DSAccordionProps> = ({ makeId, ...props }) => {
  return <MantineAccordion {...props} />;
};

export const Accordion = Object.assign(BaseAccordion, {
  Item: MantineAccordion.Item,
  Control: MantineAccordion.Control,
  Panel: MantineAccordion.Panel,
});




