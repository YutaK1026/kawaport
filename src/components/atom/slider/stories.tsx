import Slider from ".";
import { Images } from ".";
import hyoka from "@/public/project/hyoka.png";
import code_duel from "@/public/project/code_duel.png";

const meta = {
  title: "Slider",
  component: Slider,
};
export default meta;

const data: Images[] = [
  {
    src: hyoka,
    url: "",
    alt: "hyoka",
    name: "hyoka",
  },
  {
    src: code_duel,
    url: "",
    alt: "code_duel",
    name: "code_duel",
  },
];

export const Default = () => {
  return <Slider images={data} />;
};
Default.storyName = "Slider";
