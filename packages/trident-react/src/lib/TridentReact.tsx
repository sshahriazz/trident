/* eslint-disable-next-line */
export interface TridentReactProps {
  text?: string;
}

export function TridentReact(props: TridentReactProps) {
  return (
    <div>
      <h1>Welcome to TridentReact!{props.text}</h1>
    </div>
  );
}

TridentReact.defaultProps = {
  text: 'Hello trident',
};

export default TridentReact;
