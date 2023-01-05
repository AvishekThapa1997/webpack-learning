import buttonStyles from "./button.css";
class Button {
  constructor(title, onClick) {
    this.title = title;
    this.onClick = onClick;
  }

  render() {
    const button = document.createElement("button");
    button.textContent = this.title;
    button.onclick = this.onClick;
    button.classList.add(buttonStyles.button);
    document.body.append(button);
  }
}

export { Button };
