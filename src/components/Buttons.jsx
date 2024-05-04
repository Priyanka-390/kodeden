import { Callicon } from "./Icon";

export default function Buttons(props) {
     return (
    <div>
      <a href="#1234567890" className="text-decoration-none">
        <button  className={`${props.name} ff-jost d-flex align-items-center px-4 py-3 navbtn text-lightwhite fs-18 fw-900 lh-26 `}>
        <span className="pe-2 me-1"><Callicon/></span> {props.text}
        </button>
      </a>
    </div>
  );
}