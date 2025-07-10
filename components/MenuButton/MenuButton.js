import "../MenuButton/MenuButton.css";
export default function MenuButton({menuState,onClick}) {
  let cssForButton = "menu-button";
    if (menuState) {
      cssForButton += " pressed";
    }
  return (
    <button
      onClick={onClick}
      className={cssForButton}
      aria-label="Toggle menu"
    >
      Menu
    </button>
  );
}