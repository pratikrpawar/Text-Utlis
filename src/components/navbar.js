import React from "react";

export default function navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} border-dark`}>
      <div className="container-fluid justify-content-start">
        <a className={`navbar-brand text-${(props.mode==="white")?"dark":"white"} href="#"`}>
          TextConverter
        </a>
        <span className={`text-${(props.mode==="white")?"dark":"white"}`}>Simple Text Utility</span>
      </div>
      <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" onClick={props.togglemode} role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label mx-3 text-${props.mode==="white"?"black":"white"}`} htmlfor="flexSwitchCheckDefault">Darkmode</label>
</div>
    </nav>
  );
}
