import Button from "../public/src/components/Button";
import { action } from "@storybook/addon-actions";

export default {
  title: "Button",
  component: Button,
};

const Text = () => <Button onClick={action("clicked")}></Button>;
