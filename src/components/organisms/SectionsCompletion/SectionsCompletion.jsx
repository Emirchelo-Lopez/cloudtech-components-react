import Checkpoint_FillOff from "../../molecules/Checkpoint/Checkpoint_FillOff";
import Checkpoint_FillOn from "../../molecules/Checkpoint/Checkpoint_FillOn";

function SectionsCompletion() {
  return (
    <div className="sections-completion">
      <div className="sections-completed-0">
        <Checkpoint_FillOff textContent="1" />
        <Checkpoint_FillOff textContent="2" />
        <Checkpoint_FillOff textContent="3" />
        <Checkpoint_FillOff textContent="4" />
        <Checkpoint_FillOff textContent="5" />
      </div>
      <div className="sections-completed-1">
        <Checkpoint_FillOn textContent="1" />
        <Checkpoint_FillOff textContent="2" />
        <Checkpoint_FillOff textContent="3" />
        <Checkpoint_FillOff textContent="4" />
        <Checkpoint_FillOff textContent="5" />
      </div>
      <div className="sections-completed-2">
        <Checkpoint_FillOn textContent="1" />
        <Checkpoint_FillOn textContent="2" />
        <Checkpoint_FillOff textContent="3" />
        <Checkpoint_FillOff textContent="4" />
        <Checkpoint_FillOff textContent="5" />
      </div>
      <div className="sections-completed-3">
        <Checkpoint_FillOn textContent="1" />
        <Checkpoint_FillOn textContent="2" />
        <Checkpoint_FillOn textContent="3" />
        <Checkpoint_FillOff textContent="4" />
        <Checkpoint_FillOff textContent="5" />
      </div>
      <div className="sections-completed-4">
        <Checkpoint_FillOn textContent="1" />
        <Checkpoint_FillOn textContent="2" />
        <Checkpoint_FillOn textContent="3" />
        <Checkpoint_FillOn textContent="4" />
        <Checkpoint_FillOff textContent="5" />
      </div>
      <div className="sections-completed-5">
        <Checkpoint_FillOn textContent="1" />
        <Checkpoint_FillOn textContent="2" />
        <Checkpoint_FillOn textContent="3" />
        <Checkpoint_FillOn textContent="4" />
        <Checkpoint_FillOn textContent="5" />
      </div>
    </div>
  );
}

export default SectionsCompletion;
