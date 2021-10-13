import { Controller, Scene } from "react-scrollmagic";

function FadeInEffect(props) {
  return (
    <Controller>
      <Scene classToggle={props.effect} reverse={false}>
        <div
          className={`transition duration-500 transform ${
            props.fade && " opacity-0"
          }`}
        >
          <div className={`${props.bottom && " translate-y-10"}`}>
            {props.children}
          </div>
        </div>
      </Scene>
    </Controller>
  );
}

export default FadeInEffect;
