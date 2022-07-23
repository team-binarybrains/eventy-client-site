import React from "react";

function Button({
  className = "",
  text = "button",
  size = "base",
  link,
  type = "primary",
  icon = null,
  iconPosition = "left",
  submit = false,
  full = false,
  ...newProps
}) {
  let finalClass = `${className} inline-block rounded-sm font-medium border border-solid cursor-pointer text-center transition-colors duration-200`;
  if (size === "xs") finalClass += " text-xs py-1 px-2";
  else if (size === "sm") finalClass += " text-sm py-2 px-4";
  else if (size === "base") finalClass += " text-base py-3 px-6";
  else if (size === "lg") finalClass += " text-lg py-3 px-8";
  else if (size === "xl") finalClass += " text-xl py-3 px-12";
  if (submit)
    finalClass +=
      " text-white bg-blue-400 border-blue-400 hover:bg-blue-600 hover:border-blue-600";
  else if (type === "primary")
    finalClass +=
      " text-white bg-green-400 border-green-400 hover:bg-green-600 hover:border-green-600";
  else if (type === "secondary")
    finalClass +=
      " text-blue-400 bg-transparent border-blue-400 hover:bg-blue-400 hover:text-white";
  else if (type === "danger")
    finalClass +=
      " text-white bg-red-600 border-red-600 hover:bg-red-800 hover:border-red-800";
  else if (type === "warning")
    finalClass +=
      " text-black bg-yellow-400 border-yellow-400 hover:bg-yellow-600 hover:border-yellow-600";
  else if (type === "info")
    finalClass +=
      " text-white bg-indigo-300 border-indigo-300 hover:bg-indigo-500 hover:border-indigo-500";
  else if (type === "light")
    finalClass +=
      " text-black bg-gray-200 border-gray-200 hover:bg-gray-400 hover:border-gray-400";
  else if (type === "dark")
    finalClass +=
      " text-white bg-gray-900 border-gray-900 hover:bg-black hover:border-black";
  if (full) finalClass += " w-full";
  let content = text;
  if (icon) {
    if (iconPosition === "left")
      content = (
        <>
          {React.cloneElement(icon, { className: "mr-2" })}
          {text}
        </>
      );
    else if (iconPosition === "right")
      content = (
        <>
          {text}
          {React.cloneElement(icon, { className: "ml-2" })}
        </>
      );
  }
  let ButtonTag = link ? "a" : "div";
  if (submit) ButtonTag = "button";
  return (
    <ButtonTag
      href={link}
      className={finalClass}
      type={submit ? "submit" : ""}
      {...newProps}
    >
      {content}
    </ButtonTag>
  );
}

export default Button;
