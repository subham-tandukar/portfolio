import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="btn" disabled={pending}>
      {pending ? (
        <div className="spinner"></div>
      ) : (
        <>
          Submit <FaPaperPlane className="btn-icon" />{" "}
        </>
      )}
    </button>
  );
}
