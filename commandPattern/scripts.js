
    class bulb {
        toggle() {
            document.querySelector(".bulb").classList.toggle("on");
        }
    }

    class toggleAction {
        constructor(bulb) {
            this.bulb = bulb;
        }
        execute() {
            this.bulb.toggle();
        }
    }

    class remote {
        lightSwitch(command) {
            command.execute();
        }
    }

    const Bulb = new bulb();
    const action = new toggleAction(Bulb);
    const Remote = new remote();

    const button = document.querySelector("button");
    button.addEventListener("click", () => {
        Remote.lightSwitch(action);
    })