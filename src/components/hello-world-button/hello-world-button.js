import helloWorldText from "./hello-world-button.txt";
import { Button } from "../button/button";
import styles from "./hello-world-button.css";
class HelloWorldButton {
  render() {
    const helloWorldButton = new Button(helloWorldText, () => {
      const para = document.createElement("p");
      para.textContent = helloWorldText;
      para.classList.add(styles["hello-world-text"]);
      document.body.appendChild(para);
    });
    helloWorldButton.render();
  }
}
export { HelloWorldButton };
