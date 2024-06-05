import Checkpoint, {
  Checkpoint_FillOn,
  Checkpoint_FillOn_DarkMode,
} from "../molecules/Checkpoint";

function SectionsCompletion() {
  return (
    <div className="sections-completion">
      <div className="sections-completed-0">
        <Checkpoint_FillOn textContent="1" />
        <Checkpoint_FillOn textContent="2" />
        <Checkpoint_FillOn textContent="3" />
        <Checkpoint_FillOn textContent="4" />
        <Checkpoint_FillOn textContent="5" />
      </div>
      <div className="sections-completed-1">
        <Checkpoint_FillOn textContent="1" />
        <Checkpoint_FillOn textContent="2" />
        <Checkpoint_FillOn textContent="3" />
        <Checkpoint_FillOn textContent="4" />
        <Checkpoint_FillOn textContent="5" />
      </div>
      <div className="sections-completed-2">
        <Checkpoint_FillOn textContent="1" />
        <Checkpoint_FillOn textContent="2" />
        <Checkpoint_FillOn textContent="3" />
        <Checkpoint textContent="4" />
        <Checkpoint textContent="5" />
      </div>
      <div className="sections-completed-3">
        <Checkpoint_FillOn textContent="1" />
        <Checkpoint_FillOn textContent="2" />
        <Checkpoint_FillOn textContent="3" />
        <Checkpoint textContent="4" />
        <Checkpoint textContent="5" />
      </div>
      <div className="sections-completed-4">
        <Checkpoint_FillOn textContent="1" />
        <Checkpoint_FillOn textContent="2" />
        <Checkpoint_FillOn textContent="3" />
        <Checkpoint_FillOn textContent="4" />
        <Checkpoint textContent="5" />
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

function SectionsCompletion_DarkMode() {
  return (
    <div className="sections-completion">
      <div className="sections-completed-0">
        <Checkpoint textContent="1" />
        <Checkpoint textContent="2" />
        <Checkpoint textContent="3" />
        <Checkpoint textContent="4" />
        <Checkpoint textContent="5" />
      </div>
      <div className="sections-completed-1">
        <Checkpoint_FillOn_DarkMode textContent="1" />
        <Checkpoint textContent="2" />
        <Checkpoint textContent="3" />
        <Checkpoint textContent="4" />
        <Checkpoint textContent="5" />
      </div>
      <div className="sections-completed-2">
        <Checkpoint_FillOn_DarkMode textContent="1" />
        <Checkpoint_FillOn_DarkMode textContent="2" />
        <Checkpoint textContent="3" />
        <Checkpoint textContent="4" />
        <Checkpoint textContent="5" />
      </div>
      <div className="sections-completed-3">
        <Checkpoint_FillOn_DarkMode textContent="1" />
        <Checkpoint_FillOn_DarkMode textContent="2" />
        <Checkpoint_FillOn_DarkMode textContent="3" />
        <Checkpoint textContent="4" />
        <Checkpoint textContent="5" />
      </div>
      <div className="sections-completed-4">
        <Checkpoint_FillOn_DarkMode textContent="1" />
        <Checkpoint_FillOn_DarkMode textContent="2" />
        <Checkpoint_FillOn_DarkMode textContent="3" />
        <Checkpoint_FillOn_DarkMode textContent="4" />
        <Checkpoint textContent="5" />
      </div>
      <div className="sections-completed-5">
        <Checkpoint_FillOn_DarkMode textContent="1" />
        <Checkpoint_FillOn_DarkMode textContent="2" />
        <Checkpoint_FillOn_DarkMode textContent="3" />
        <Checkpoint_FillOn_DarkMode textContent="4" />
        <Checkpoint_FillOn_DarkMode textContent="5" />
      </div>
    </div>
  );
}

export default SectionsCompletion;
export { SectionsCompletion_DarkMode };
