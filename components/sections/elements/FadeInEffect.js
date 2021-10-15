import { Scene } from "react-scrollmagic";

function FadeInEffect(props) {
  return (
    <Scene classToggle={props.effect} reverse={false} offset={props.offset}>
      <div
        className={`transition duration-700 transform ${
          props.fade && " opacity-0"
        }`}
      >
        <div
          className={`${props.bottom ? "translate-y-10" : ""}${
            props.left ? "-translate-x-10" : ""
          }${props.top ? "-translate-y-10": ""}`}
        >
          {props.children}
        </div>
      </div>
    </Scene>
  );
}

export default FadeInEffect;
