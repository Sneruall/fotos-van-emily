import { Controller, Scene } from "react-scrollmagic";

function FadeInEffect(props) {
  return (
    <Controller>
      <Scene classToggle={props.effect} reverse={false}>
        <div className="transition duration-500 transform opacity-0 translate-y-10">
          {props.children}
        </div>
      </Scene>
    </Controller>
  );
}

export default FadeInEffect;
