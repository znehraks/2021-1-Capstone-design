// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/radar
import { ResponsiveRadar } from "@nivo/radar";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveRadar = ({ data /* see data tab */ }) => {
  return (
    <ResponsiveRadar
      data={data}
      keys={["T1", "T2", "T3", "T4", "T5"]}
      indexBy="rank"
      maxValue="auto"
      margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
      curve="linearClosed"
      borderWidth={2}
      borderColor={{ from: "color" }}
      gridLevels={5}
      gridShape="linear"
      gridLabelOffset={36}
      enableDots={true}
      dotSize={10}
      dotColor={{ theme: "background" }}
      dotBorderWidth={2}
      dotBorderColor={{ from: "color" }}
      enableDotLabel={true}
      dotLabel="value"
      dotLabelYOffset={-12}
      colors={{ scheme: "accent" }}
      fillOpacity={0.25}
      blendMode="multiply"
      animate={true}
      motionConfig="wobbly"
      isInteractive={true}
      theme={{
        fontSize: 30,
        fontWeight: 800,
      }}
      legends={[
        {
          anchor: "top-left",
          direction: "column",
          translateX: -50,
          translateY: -40,
          itemWidth: 80,
          itemHeight: 20,
          itemTextColor: "#000",
          symbolSize: 20,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  );
};
export default MyResponsiveRadar;
