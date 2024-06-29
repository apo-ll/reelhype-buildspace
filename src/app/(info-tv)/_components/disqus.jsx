"use client";

import { DiscussionEmbed } from "disqus-react";


const Disqus = ({ id, title, media_types }) => {
  const disqusShortname = "cinematic-one";
  const disqusConfig = {
    url: `http://localhost:3000/info/${media_types}/${id}`,
    identifier: id,
    title: title,
  };

  return (
    <div className="article-container font-sans">
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
};

export { Disqus };