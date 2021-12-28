import pressButton from "~/assets/press-button.png";

export default () => {
  return (
    <div>
      <div>Select Invoice</div>

      <div className="flexCenter heartbeat">
        <img src={pressButton} height={50} width={50} />
      </div>
    </div>
  );
};
