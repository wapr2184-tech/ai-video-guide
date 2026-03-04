import { useState } from "react";

export default function ToolLogo({ tool, sizeClass = "w-12 h-12", textSize = "text-2xl" }) {
  const [imgFailed, setImgFailed] = useState(false);

  const logoUrl = tool.logoUrl
    ? tool.logoUrl
    : `https://logo.clearbit.com/${tool.logoDomain}`;

  const showEmoji = imgFailed || (!tool.logoUrl && !tool.logoDomain);

  return (
    <div
      className={`${sizeClass} rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center overflow-hidden shadow-lg flex-shrink-0`}
    >
      {!showEmoji ? (
        <img
          src={logoUrl}
          alt={`${tool.name} logo`}
          className="w-full h-full object-contain p-1.5 bg-white rounded-xl"
          onError={() => setImgFailed(true)}
          loading="lazy"
        />
      ) : (
        <span className={textSize}>{tool.logo}</span>
      )}
    </div>
  );
}
