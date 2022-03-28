export const helloEvent = (who: string) => {
  logMessage(who, "hello");
};

export const logMessage = (source: string, msg: string) => {
  const msgContainer: HTMLElement | null = document.getElementById("messages");

  if (msgContainer) {
    msgContainer.innerHTML += `<p><strong>${source}</strong> said ${msg}`;
  }
};

export const tellComponents = (type: string) => {
  const name = (document.getElementById("yourName") as HTMLInputElement).value;

  if (type === "react") {
    const reactEl: HTMLElement = document.createElement("react-el");
    reactEl.setAttribute("name", name);
    reactEl.setAttribute("onHelloEvt", "onHelloEvt");
    reactEl.addEventListener("onHelloEvt", (e) => helloEvent("React"));

    const reactElContainer: HTMLElement | null =
      document.getElementById("react-container");
    if (reactElContainer && reactElContainer.children.length > 0) {
      reactElContainer.removeChild(reactElContainer.children[0]);
    }
    reactElContainer?.appendChild(reactEl);
  } else {
    const ngEl: HTMLElement = document.createElement("ng-el");
    ngEl.setAttribute("name", name);
    ngEl.addEventListener("helloEvt", (e) => helloEvent("Angular"));

    const ngElContainer: HTMLElement | null = document.getElementById("ng-container");
    if (ngElContainer && ngElContainer.children.length > 0) {
      ngElContainer.removeChild(ngElContainer.children[0]);
    }
    ngElContainer?.appendChild(ngEl);
  }
  logMessage("You", `my name is ${name}`);
};
