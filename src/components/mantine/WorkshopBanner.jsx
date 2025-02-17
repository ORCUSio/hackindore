import { Text, Title, TextInput, Button, Image, Badge } from "@mantine/core";
// import image from "./image.svg";
import classes from "./EmailBanner.module.css";

export default function WorkshopBanner() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>Wait a minute...</Title>
        <Text fw={500} fz="lg" mb={5}>
          Subscribe to our newsletter!
        </Text>
        <Text fz="sm" c="dimmed">
          You will never miss important product updates, latest news and
          community QA sessions. Our newsletter is once a week, every Sunday.
        </Text>

        <div className={classes.controls}>
          <Badge>Ugrent</Badge>
          <Badge>High Attention </Badge>
        </div>
      </div>
      {/* <Image src={image.src} className={classes.image} /> */}
    </div>
  );
}
