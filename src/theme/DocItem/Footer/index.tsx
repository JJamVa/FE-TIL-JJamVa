import React from "react";
import DocItemFooter from "@theme-original/DocItem/Footer";
import Comments from "@site/src/components/Comments";

import { useDoc } from "@docusaurus/plugin-content-docs/client";

export default function DocItemFooterWrapper(props) {
  const { metadata } = useDoc(); // 현재 문서의 메타데이터 가져오기
  const { comments = true } = metadata.frontMatter; // frontMatter에서 comments 속성 확인

  return (
    <>
      <DocItemFooter {...props} />
      {comments && <Comments />}
    </>
  );
}
