import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
  },
  {
    text: "Examples",
    url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
    description:
      "A collection of websites ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites.",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Learn how to add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
  },
]

const samplePageLinks = [
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]

const moreLinks = [
  { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
  {
    text: "Documentation",
    url: "https://gatsbyjs.com/docs/",
  },
  {
    text: "Starters",
    url: "https://gatsbyjs.com/starters/",
  },
  {
    text: "Showcase",
    url: "https://gatsbyjs.com/showcase/",
  },
  {
    text: "Contributing",
    url: "https://www.gatsbyjs.com/contributing/",
  },
  { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/example.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
        Welcome to <b>Gatsby!</b>
      </h1>
    
<ul>
<li><a href="http://d-cigar.com">폰테크</a></li>
<li><a href="http://d-cigar.com/2-4">폰테크</a></li>
<li><a href="http://d-cigar.com/?mod=document&pageid=1&uid=26">폰테크</a></li>
</ul>

<ul>
<li><a href="https://www.facebook.com/phonetechnow">폰테크</a></li>
<li><a href="https://smart-phone-technology-samsung-galaxy-iphone-mobile.d-cigar.com" rel="friend" title="폰테크" alt="폰테크">폰테크</a></li>
<li><a href="https://phone-smart.org" rel="met colleague kin muse sweetheart" title="폰테크" alt="폰테크" target="_top">폰테크</a></li>
</ul>
		
<ul>
<li><a href="https://cafe.naver.com/kjhserver">폰테크</a></li>
<li><a href="http://d-cigar.com">비대면 폰테크</a></li>
<li><a href="http://smart-phone-technology-galaxy-iphone.d-cigar.com">내구제</a></li>
<li><a href="http://ptkd.d-cigar.com">비대면 폰테크</a></li>
<li><a href="http://ptkg.d-cigar.com">부산폰테크</a></li>
<li><a href="http://ptn1.d-cigar.com">서울폰테크</a></li>
<li><a href="http://axp365.d-cigar.com">인천폰테크</a></li>
<li><a href="http://fx365.d-cigar.com">광주폰테크</a></li>
<li><a href="http://ptks.d-cigar.com">울산폰테크</a></li>
</ul>
	
	
    </div>
	
	
	===================================
	
	
<ul>

<li><a href="http://livemedia-soft.com/19309?ckattempt=1">네이버 상위노출</a></li>

<li><a href="http://naver.livemedia-soft.com">네이버 플레이스 상위노출</a></li>

<li><a href="https://story.kakao.com/ch/livemedia/2AqGkvNCK29">웹사이트 상위노출</a></li>

<li><a href="http://naver.livemedia-soft.com/">사이트 상위노출</a></li>

<li><a href="http://livemedia-soft.com/338420">구글 상위노출</a></li>

<li><a href="http://hp.livemedia-soft.com">네이버 사이트 등록</a></li>

<li><a href="http://link.livemedia-soft.com">백링크</a></li>

</ul>
	
	
	===================================
	
	
	
<ul>
<li><a href="http://di.d-cigar.com">두류스타힐스</a></li>
<li><a href="http://xi-central-city.d-cigar.com">음성 우미린 풀하우스</a></li>
<li><a href="http://art.d-cigar.com">원주 롯데캐슬 시그니처</a></li>
<li><a href="http://everpark-sj.d-cigar.com">대명자이 그랜드시티</a></li>
<li><a href="http://gang.d-cigar.com">힐스테이트 동대구 센트럴</a></li>

<li><a href="http://livemedia-soft.com/">서버관리</a></li>
<li><a href="http://livemedia-soft.com/rtms">서버모니터링</a></li>

<li><a href="http://wp.livemedia-soft.com">워드프레스홈페이지</a></li>
<li><a href="http://page.livemedia-soft.com">반응형홈페이지</a></li>

<li><a href="https://panchokmul.net">판촉물</a></li>

<li><a href="https://educational-topclass-study-campus.d-cigar.com">재수기숙학원</a></li>

<li><a href="http://quick-ticket-cultureland-pin24.d-cigar.com">문화상품권 현금화</a></li>

<li><a href="https://bitget88.co.kr">비트겟</a></li>
<li><a href="https://bitget.d-cigar.com">비트겟</a></li>

<li><a href="http://tattoo.d-cigar.com">대구타투</a></li>
<li><a href="http://ulsan.gogokea.com">울산중고차</a></li>

</ul>
	
	
	
	
	
	
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}${utmParameters}`}
          >
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
	
	
	
	
	
    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
