import React from "react";
import classes from "./Summary.module.scss";
import IconReaction from "../../assets/images/icon-reaction.svg";
import IconMemory from "../../assets/images/icon-memory.svg";
import IconVerbal from "../../assets/images/icon-verbal.svg";
import IconVisual from "../../assets/images/icon-visual.svg";
const Summary = () => {
  return (
    <div className={classes.summary}>
      <div className={classes.summary__title}>Summary</div>
      <div className={classes["summary__list-item"] + " " + classes.danger}>
        <span>
          <img
            src={IconReaction}
            alt="Reaction Icon"
            className={classes.summary__icon}
          />
          Reaction
        </span>
        <span className={classes.mark}>
          <span>80</span> / 100
        </span>
      </div>
      <div className={classes["summary__list-item"] + " " + classes.warning}>
        <span>
          <img
            src={IconMemory}
            alt="Memory Icon"
            className={classes.summary__icon}
          />
          Memory
        </span>
        <span className={classes.mark}>
          <span>92</span> / 100
        </span>
      </div>
      <div className={classes["summary__list-item"] + " " + classes.success}>
        <span>
          <img
            src={IconVerbal}
            alt="Verbal Icon"
            className={classes.summary__icon}
          />
          Verbal
        </span>
        <span className={classes.mark}>
          <span>61</span> / 100
        </span>
      </div>
      <div className={classes["summary__list-item"] + " " + classes.info}>
        <span>
          <img
            src={IconVisual}
            alt="Visual Icon"
            className={classes.summary__icon}
          />
          Visual
        </span>
        <span className={classes.mark}>
          <span>72</span> / 100
        </span>
      </div>

      <button href="#" className={classes.button}>
        Continue
      </button>
    </div>
  );
};

export default Summary;
