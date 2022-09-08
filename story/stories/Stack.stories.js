import Stack from "../public/src/components/Stack";

export default {
  title: "Public/src/components/Stack",
  component: Stack,
  argTypes: {
    children: { type: "number", defaultValue: 3 },
  },
};

const Template = ({ children, ...args }) => (
  <Stack {...args}>
    {[...Array(children).keys()].map((n) => (
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "green",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {n}
      </div>
    ))}
  </Stack>
);

export const Horizontal = Template.bind({});
Horizontal.args = {
  direction: "row",
  spacing: 2,
  wrap: false,
};

export const Vertical = Template.bind({});
Vertical.args = {
  direction: "column",
  spacing: 2,
  wrap: false,
};

export const noSpacing = Template.bind({});
noSpacing.args = {
  direction: "row",
  spacing: 0,
  wrap: false,
};

export const wrapOverflow = Template.bind({});
wrapOverflow.args = {
  children: 50,
  direction: "row",
  spacing: 2,
  wrap: true,
};

export const empty = Template.bind({});
empty.args = {
  children: 0,
  direction: "row",
  spacing: 2,
  wrap: true,
};
