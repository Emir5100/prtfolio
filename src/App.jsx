import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import portrait from './assets/profile-peng-chao-ai-v2.png'
import shanshi from './assets/portfolio/shanshi.jpg'
import shanshiSystem from './assets/portfolio/shanshi-system.jpg'
import shanshiEditorial from './assets/portfolio/shanshi-editorial.jpg'
import shanshiLogo from './assets/portfolio/shanshi-logo.jpg'
import shanshiPalette from './assets/portfolio/shanshi-palette.jpg'
import shanshiPattern from './assets/portfolio/shanshi-pattern.jpg'
import shanshiTouchpoints from './assets/portfolio/shanshi-touchpoints.jpg'
import shanshiCups from './assets/portfolio/shanshi-cups.jpg'
import shanshiFullSystem from './assets/portfolio/shanshi-full-system.jpg'
import shanshiOutdoor from './assets/portfolio/shanshi-outdoor.jpg'
import globalTalent from './assets/portfolio/global-talent.jpg'
import globalTalentKit from './assets/portfolio/global-talent-kit.jpg'
import globalTalentDigital from './assets/portfolio/global-talent-digital.jpg'
import globalTalentLogo from './assets/portfolio/global-talent-logo.jpg'
import globalTalentPalette from './assets/portfolio/global-talent-palette.jpg'
import globalTalentOutdoor from './assets/portfolio/global-talent-outdoor.jpg'
import globalTalentStationery from './assets/portfolio/global-talent-stationery.jpg'
import globalTalentTouchpoints from './assets/portfolio/global-talent-touchpoints.jpg'
import globalTalentBanners from './assets/portfolio/global-talent-banners.jpg'
import vcl from './assets/portfolio/vcl.jpg'
import vclDetail from './assets/portfolio/vcl-detail.jpg'
import vclStory from './assets/portfolio/vcl-story.jpg'
import vclSection from './assets/portfolio/vcl-section.jpg'
import vclDetailOne from './assets/portfolio/vcl-detail-detail-1.jpg'
import vclDetailTwo from './assets/portfolio/vcl-detail-detail-2.jpg'
import satellite from './assets/portfolio/satellite.jpg'
import satelliteCover from './assets/portfolio/satellite-cover.jpg'
import satelliteDetailOne from './assets/portfolio/satellite-detail-1.jpg'
import satelliteDetailTwo from './assets/portfolio/satellite-detail-2.jpg'
import techRoadshowCover from './assets/portfolio/tech-roadshow-cover.jpg'
import techRoadshowSystem from './assets/portfolio/tech-roadshow-system.jpg'
import techRoadshowDetailOne from './assets/portfolio/tech-roadshow-system-detail-1.jpg'
import techRoadshowDetailTwo from './assets/portfolio/tech-roadshow-system-detail-2.jpg'
import academyCover from './assets/portfolio/academy-cover.jpg'
import academySystem from './assets/portfolio/academy-system.jpg'
import academyDetailOne from './assets/portfolio/academy-system-detail-1.jpg'
import academyDetailTwo from './assets/portfolio/academy-system-detail-2.jpg'
import brandBook from './assets/portfolio/brand-book.jpg'
import brandBookSpread from './assets/portfolio/brand-book-spread.jpg'
import brandBookContent from './assets/portfolio/brand-book-content.jpg'
import brandBookSystem from './assets/portfolio/brand-book-system.jpg'
import brandBookPrint from './assets/portfolio/brand-book-print.jpg'
import brandBookCover from './assets/portfolio/brand-book-cover.jpg'
import brandBookDetail from './assets/portfolio/brand-book-detail.jpg'
import automotivePosters from './assets/portfolio/automotive-posters.jpg'
import printCollateral from './assets/portfolio/print-collateral.jpg'
import digital from './assets/portfolio/digital.jpg'
import packaging from './assets/portfolio/packaging.jpg'
import visualArchive from './assets/portfolio/visual-archive.jpg'
import seasonalPosters from './assets/portfolio/seasonal-posters.jpg'
import fencingCollateral from './assets/portfolio/fencing-collateral.jpg'
import editorialBrochure from './assets/portfolio/editorial-brochure.jpg'
import eventCards from './assets/portfolio/event-cards.jpg'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    no: '01', year: '2026', title: '善时 · 中式茶饮', en: 'SHANSHI TEA BRAND', layout: 'wide',
    tags: ['品牌策略', '视觉识别', '包装延展'],
    images: [shanshi, shanshiLogo, shanshiSystem, shanshiPalette, shanshiPattern, shanshiTouchpoints, shanshiCups, shanshiFullSystem, shanshiEditorial, shanshiOutdoor],
    description: '从当代青年对松弛感与情绪价值的需求出发，以“善制本味，时刻清欢”为品牌核心，建立兼具东方底蕴与现代感的茶饮视觉体系。',
  },
  {
    no: '02', year: '2024', title: '环球英才网', en: 'GLOBAL TALENT NETWORK', layout: 'split',
    tags: ['品牌升级', '标志设计', '应用系统'],
    images: [globalTalent, globalTalentLogo, globalTalentPalette, globalTalentKit, globalTalentStationery, globalTalentTouchpoints, globalTalentDigital, globalTalentOutdoor, globalTalentBanners],
    description: '围绕“共促、共创、共谋”的平台理念，将地图、拼图与模块化结构整合为清晰识别符号，并延展至活动、数字端与空间场景。',
  },
  {
    no: '03', year: '2024', title: '剑心触碰', en: 'HEARTS CROSSED BY BLADES', layout: 'duo',
    tags: ['赛事主视觉', '活动物料', '现场落地'],
    images: [vcl, vclSection, vclStory, vclDetail, vclDetailOne, vclDetailTwo],
    description: '为万国击剑 VCL 城市联赛五周年总决赛建立完整赛事视觉，以骑士精神与“剑与心的五年交响”为线索完成主视觉及 20+ 项现场物料。',
  },
  {
    no: '04', year: '2025', title: '少年儿童卫星赛', en: 'FENCING SATELLITE COMPETITION', layout: 'duo-reverse',
    tags: ['赛事视觉', '空间导视', '奖牌证书'],
    images: [satelliteCover, satellite, satelliteDetailOne, satelliteDetailTwo],
    description: '以宇宙探索为核心概念，将儿童击剑动作、轨道与星球转化为轻盈而有速度感的视觉语言，覆盖线上传播与赛场空间。',
  },
  {
    no: '05', year: '2023', title: '科创领航 · 智绘未来', en: 'TECH ROADSHOW SYSTEM', layout: 'duo',
    tags: ['科技会务', '主视觉', '整套物料'],
    images: [techRoadshowCover, techRoadshowSystem, techRoadshowDetailOne, techRoadshowDetailTwo],
    description: '为硬科技项目路演构建未来感视觉系统，以圆环、曲线与流动空间表达科技成果与资本、产业之间的连接。',
  },
  {
    no: '06', year: '2023', title: '国际院士讲堂', en: 'ACADEMY KEY VISUAL', layout: 'duo-reverse',
    tags: ['活动视觉', '信息设计', '数字传播'],
    images: [academyCover, academySystem, academyDetailOne, academyDetailTwo],
    description: '围绕“不对称催化技术及在制药工业中的应用”，使用分子结构与网格语言建立兼具学术可信度和传播效率的活动系统。',
  },
  {
    no: '07', year: '2025', title: '万国体育品牌画册', en: 'VANGO SPORTS BRAND BOOK', layout: 'archive',
    tags: ['画册设计', '信息编排', '印刷落地'],
    images: [brandBookCover, brandBook, brandBookSpread, brandBookContent, brandBookSystem, brandBookPrint, brandBookDetail],
    description: '以品牌蓝黄为秩序基础，重新组织内容层级与阅读节奏，完成 56 页品牌加盟手册并服务北京、上海两场加盟会。',
  },
  {
    no: '08', year: '2022—25', title: '商业视觉实验', en: 'COMMERCIAL VISUAL ARCHIVE', layout: 'archive',
    tags: ['海报', '数字物料', '包装', '印刷'],
    images: [visualArchive, automotivePosters, printCollateral, seasonalPosters, fencingCollateral, editorialBrochure, eventCards, digital, packaging],
    description: '跨越汽车文化、展览物料、移动端内容与食品包装的视觉实验，保持不同风格下的信息秩序与完成度。',
  },
]

const strengths = [
  ['01', 'BRAND SYSTEM', '品牌系统构建', '从品牌策略与核心概念出发，完成标志、色彩、字体与应用系统，让视觉语言保持一致且可持续延展。'],
  ['02', 'KEY VISUAL', '主视觉与传播', '把抽象主题转译为有识别度的主视觉，覆盖活动、赛事、会务与线上传播，兼顾冲击力与信息效率。'],
  ['03', 'PRODUCTION', '印刷与项目落地', '熟悉画册、展陈、包装与现场物料的工艺逻辑，可独立对接供应商、跟进打样并控制交付品质。'],
  ['04', 'AI WORKFLOW', 'AI 辅助创意', '熟练使用即梦、Stable Diffusion 等生成式工具扩展视觉探索，并结合 C4D、剪映完成动态与三维表达。'],
]

const experience = [
  ['2025.10—2026.10', '文化传播 / 展陈设计', '展厅版面、电子屏与导视系统全流程设计及驻场落地。'],
  ['2024.03—2025.07', '万国体育 / 平面设计师', '赛事视觉、品牌画册与场馆运营物料。'],
  ['2023.05—2024.01', '聚英创科技 / 平面设计师', '集团视觉方案、品牌升级与科技会务视觉。'],
  ['2021.09—2023.03', '品牌与商业项目', '教育、汽车科技、医药、餐饮与文化活动项目。'],
]

function Arrow({ diagonal = false }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d={diagonal ? 'M5 19 19 5M8 5h11v11' : 'M5 12h14M14 7l5 5-5 5'} /></svg>
}

function SectionTitle({ index, eyebrow, children }) {
  return (
    <div className="section-intro">
      <div className="section-code"><span>{index}</span><i />{eyebrow}</div>
      <h2 className="section-title">{children}</h2>
    </div>
  )
}

function ProjectCase({ project, onOpen }) {
  return (
    <article className={`case-study case-${project.layout} glow-card stagger-card`} data-case={project.no}>
      <header className="case-header">
        <div className="case-index"><span>{project.no}</span><i />{project.year}</div>
        <div className="case-name"><small>{project.en}</small><h3>{project.title}</h3></div>
        <div className="case-actions">
          <span>{String(project.images.length).padStart(2, '0')} VISUAL FRAMES</span>
          <button type="button" className="case-open" onClick={() => onOpen(project)} aria-label={`打开${project.title}项目详情`}>
            VIEW CASE <Arrow diagonal />
          </button>
        </div>
      </header>
      <div className="case-gallery">
        {project.images.map((image, index) => (
          <figure className={`case-frame image-reveal frame-${index + 1}`} key={image}>
            <img src={image} alt={`${project.title}项目展示 ${index + 1}`} loading="lazy" decoding="async" data-parallax />
            <figcaption>{project.no}.{String(index + 1).padStart(2, '0')}</figcaption>
          </figure>
        ))}
      </div>
      <footer className="case-footer">
        <p>{project.description}</p>
        <div>{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      </footer>
    </article>
  )
}

function App() {
  const rootRef = useRef(null)
  const [activeProject, setActiveProject] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      gsap.set('.opening', { display: 'none' })
      return undefined
    }

    const ctx = gsap.context(() => {
      const opening = gsap.timeline({ defaults: { ease: 'expo.inOut' } })
      opening
        .set('.opening', { autoAlpha: 1 })
        .fromTo('.opening-mark span', { yPercent: 135, scaleX: .62 }, { yPercent: 0, scaleX: 1, duration: 1.45, stagger: .1 })
        .fromTo('.opening-meta > *', { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: .7, stagger: .1, ease: 'power3.out' }, '-=.72')
        .to('.opening-mark span', { yPercent: -120, duration: .9, stagger: .06 }, '+=.45')
        .to('.opening-panel', { scaleY: 0, transformOrigin: 'top', duration: 1.05, stagger: .08 }, '-=.5')
        .to('.opening', { autoAlpha: 0, pointerEvents: 'none', duration: .25 }, '-=.15')

      gsap.fromTo('.hero-title-line',
        { yPercent: 120, scaleX: .68, skewX: -8 },
        { yPercent: 0, scaleX: 1, skewX: 0, duration: 1.65, stagger: .12, ease: 'expo.out', delay: 1.35 },
      )
      gsap.fromTo('.hero-support, .hero-ledger, .hero-bottom',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.1, stagger: .14, ease: 'power4.out', delay: 1.8 },
      )
      gsap.fromTo('.hero-rule', { scaleX: 0 }, { scaleX: 1, transformOrigin: 'left', duration: 1.2, ease: 'expo.out', delay: 2.1 })

      gsap.utils.toArray('.section-intro').forEach((intro) => {
        const title = intro.querySelector('.section-title')
        const code = intro.querySelector('.section-code')
        gsap.fromTo(title,
          { xPercent: -34, clipPath: 'inset(0 100% 0 0)', skewX: -6 },
          { xPercent: 0, clipPath: 'inset(0 0% 0 0)', skewX: 0, duration: 1.65, ease: 'expo.out', scrollTrigger: { trigger: intro, start: 'top 82%' } },
        )
        gsap.fromTo(code, { opacity: 0, x: 70 }, { opacity: 1, x: 0, duration: 1, ease: 'power4.out', scrollTrigger: { trigger: intro, start: 'top 84%' } })
      })

      gsap.utils.toArray('.stagger-group').forEach((group) => {
        const cards = group.querySelectorAll('.stagger-card')
        gsap.fromTo(cards,
          { y: 110, clipPath: 'inset(12% 0 88% 0)', scale: .965 },
          { y: 0, clipPath: 'inset(0% 0 0% 0)', scale: 1, duration: 1.35, stagger: .16, ease: 'expo.out', scrollTrigger: { trigger: group, start: 'top 78%' } },
        )
      })

      gsap.utils.toArray('.image-reveal').forEach((frame) => {
        gsap.fromTo(frame,
          { clipPath: 'inset(100% 0 0 0)', y: 70 },
          { clipPath: 'inset(0% 0 0 0)', y: 0, duration: 1.5, ease: 'expo.out', scrollTrigger: { trigger: frame, start: 'top 86%' } },
        )
        const image = frame.querySelector('[data-parallax]')
        if (image) {
          gsap.fromTo(image, { yPercent: -7, scale: 1.1 }, {
            yPercent: 7, scale: 1.03, ease: 'none',
            scrollTrigger: { trigger: frame, start: 'top bottom', end: 'bottom top', scrub: 1.25 },
          })
        }
      })

      gsap.to('.band-one', { xPercent: 12, yPercent: -8, rotation: 4, duration: 16, repeat: -1, yoyo: true, ease: 'sine.inOut' })
      gsap.to('.band-two', { xPercent: -10, yPercent: 9, rotation: -5, duration: 20, repeat: -1, yoyo: true, ease: 'sine.inOut' })
      ScrollTrigger.create({
        trigger: '.about',
        start: 'top 88px',
        endTrigger: '.contact',
        end: 'bottom top',
        toggleClass: { targets: '.site-header', className: 'is-floating' },
      })
      ScrollTrigger.refresh()
    }, rootRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    document.body.style.overflow = activeProject ? 'hidden' : ''
    const onKeyDown = (event) => event.key === 'Escape' && setActiveProject(null)
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [activeProject])

  useEffect(() => {
    let animationFrame = 0
    let latestEvent = null
    let activeCard = null

    const updateGlow = () => {
      const target = latestEvent?.target
      const card = target instanceof Element ? target.closest('.glow-card') : null
      if (card) {
        const rect = card.getBoundingClientRect()
        card.style.setProperty('--gx', `${((latestEvent.clientX - rect.left) / rect.width) * 100}%`)
        card.style.setProperty('--gy', `${((latestEvent.clientY - rect.top) / rect.height) * 100}%`)
        if (activeCard !== card) {
          activeCard?.classList.remove('is-glowing')
          card.classList.add('is-glowing')
          activeCard = card
        }
      } else if (activeCard) {
        activeCard.classList.remove('is-glowing')
        activeCard = null
      }
      animationFrame = 0
    }

    const onPointerMove = (event) => {
      latestEvent = event
      if (!animationFrame) animationFrame = window.requestAnimationFrame(updateGlow)
    }

    document.addEventListener('pointermove', onPointerMove, { passive: true })
    return () => {
      document.removeEventListener('pointermove', onPointerMove)
      if (animationFrame) window.cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <main ref={rootRef}>
      <div className="opening" aria-hidden="true">
        <div className="opening-panel panel-a" /><div className="opening-panel panel-b" /><div className="opening-panel panel-c" />
        <div className="opening-content">
          <div className="opening-mark"><span>PORT</span><span>FOLIO.</span></div>
          <div className="opening-meta"><span>PENG CHAO®</span><i /><span>VISUAL / AI / BRAND</span><span>2026</span></div>
        </div>
      </div>

      <div className="ambient-bands" aria-hidden="true"><i className="band-one" /><i className="band-two" /></div>

      <header className="site-header">
        <a className="monogram" href="#top" aria-label="返回首页"><span>PC</span><i /></a>
        <nav className={menuOpen ? 'is-open' : ''} aria-label="主导航">
          <a href="#about" onClick={() => setMenuOpen(false)}>关于</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>项目</a>
          <a href="#strengths" onClick={() => setMenuOpen(false)}>能力</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>联系</a>
        </nav>
        <a className="nav-contact" href="#contact"><span>开启合作</span><Arrow /></a>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="打开导航"><span /><span /></button>
      </header>

      <section className="hero" id="top">
        <video className="hero-video" autoPlay muted loop playsInline preload="metadata">
          <source src={`${import.meta.env.BASE_URL}hero-industrial.mp4`} type="video/mp4" />
        </video>
        <div className="hero-noise" /><div className="hero-scan" />
        <div className="hero-content shell">
          <div className="hero-support">
            <span>PENG CHAO / CREATIVE PRACTICE</span><span>BEIJING · CHINA</span><span>MMXXVI</span>
          </div>
          <div className="hero-main">
            <div className="hero-ledger">
              <span>SYS—001</span><i /><span>VISUAL OUTPUT</span><i /><span>READY</span>
            </div>
            <div className="hero-heading" aria-label="Portfolio 作品集">
              <div className="hero-title-mask"><span className="hero-title-line title-fill">PORT</span></div>
              <div className="hero-title-mask"><span className="hero-title-line title-stroke">FOLIO<span>.</span></span></div>
              <div className="hero-title-tag">作品集 / SELECTED 2021—2026</div>
            </div>
            <aside className="hero-spec">
              <p>DESIGN DISCIPLINES</p>
              <div><span>01</span>BRAND SYSTEM</div><div><span>02</span>KEY VISUAL</div><div><span>03</span>AI IMAGING</div><div><span>04</span>PRINT / DIGITAL</div>
            </aside>
          </div>
          <div className="hero-rule" />
          <div className="hero-bottom">
            <p><small>DESIGN WITH INTENT</small>策略构成视觉骨架，<br />执行让创意真正抵达现场。</p>
            <a className="scroll-cue" href="#work"><span>EXPLORE PROJECTS</span><Arrow /></a>
            <div className="availability"><i /> AVAILABLE FOR SELECTED PROJECTS</div>
          </div>
        </div>
        <div className="hero-side-code">INDUSTRIAL / EDITION 01</div>
      </section>

      <div className="industrial-strip" aria-label="专业方向">
        <div><span>VISUAL DESIGN</span><i>///</i><span>BRAND SYSTEM</span><i>///</i><span>AI IMAGING</span><i>///</i><span>VISUAL DESIGN</span><i>///</i><span>BRAND SYSTEM</span><i>///</i><span>AI IMAGING</span><i>///</i></div>
      </div>

      <section className="about section shell" id="about">
        <SectionTitle index="01" eyebrow="PROFILE / 个人经历">PROFILE<span>®</span></SectionTitle>
        <div className="about-grid stagger-group">
          <div className="portrait-wrap glow-card stagger-card image-reveal">
            <img src={portrait} alt="彭超个人照片" decoding="async" data-parallax />
            <span className="portrait-label">PENG CHAO / 1998</span><div className="portrait-mark">+</div>
          </div>
          <div className="about-copy stagger-card">
            <p className="eyebrow">VISUAL · AI · BRAND DESIGNER</p>
            <h3>用系统思维<br />制造<strong>视觉冲击。</strong></h3>
            <p className="lead">我是彭超，一名常驻北京的视觉设计师。拥有 4 年品牌、体育、科技与展陈项目经验，擅长从概念设定到制作落地的完整设计流程。</p>
            <p className="secondary">工作跨越品牌识别、活动主视觉、画册与印刷物料、空间导视及数字内容。我关注画面，也关注信息如何被理解、系统如何被使用，以及设计最终如何被准确实现。</p>
            <div className="contact-row"><a href="mailto:867611697@qq.com">EMAIL <Arrow diagonal /></a><a href="tel:+8618610509951">PHONE <Arrow diagonal /></a></div>
          </div>
        </div>

        <div className="stats stagger-group">
          {[['4+','YEARS / 设计经验'],['20+','DELIVERABLES / 单场赛事物料'],['8','EVENTS / 大型会务项目'],['30%','GROWTH / 赛事报名增长']].map(([value,label]) => (
            <div className="glow-card stagger-card" key={label}><strong>{value}</strong><span>{label}</span></div>
          ))}
        </div>

        <div className="experience-block stagger-group">
          <div className="experience-intro stagger-card"><span>WORK LOG</span><h3>经验不是履历，<br />是不断校准的系统。</h3></div>
          <div className="timeline">
            {experience.map(([date,title,copy], index) => <article className="timeline-row glow-card stagger-card" key={date}><span>{String(index + 1).padStart(2,'0')}</span><time>{date}</time><h4>{title}</h4><p>{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className="work section" id="work">
        <div className="shell">
          <SectionTitle index="02" eyebrow="SELECTED ARCHIVE / 精选项目">WORKS<span>®</span></SectionTitle>
          <div className="work-manifest">
            <div><strong>08</strong><span>SELECTED CASES</span></div>
            <div><strong>50+</strong><span>VISUAL FRAMES</span></div>
            <p>品牌定义 / 主视觉 / 会务 / 画册 / 印刷 / 数字内容</p>
          </div>
          <div className="project-list">
            {projects.map((project) => <ProjectCase project={project} onOpen={setActiveProject} key={project.no} />)}
          </div>
        </div>
      </section>

      <section className="strengths section shell" id="strengths">
        <SectionTitle index="03" eyebrow="CAPABILITIES / 个人优势">SYSTEM<span>®</span></SectionTitle>
        <div className="strength-grid stagger-group">
          {strengths.map(([index,en,title,copy]) => (
            <article className="strength-card glow-card stagger-card" key={index}>
              <div className="strength-top"><span>{index}</span><i>+</i></div>
              <div><small>{en}</small><h3>{title}</h3><p>{copy}</p></div>
            </article>
          ))}
        </div>
        <div className="toolkit"><span>SOFTWARE / TOOLS</span><div>{['Illustrator','Photoshop','InDesign','C4D','Stable Diffusion','即梦 AI','剪映'].map((tool)=><i key={tool}>{tool}</i>)}</div></div>
      </section>

      <footer className="contact" id="contact">
        <div className="contact-grid" />
        <div className="shell contact-inner">
          <SectionTitle index="04" eyebrow="CONTACT / 开始合作">HELLO<span>®</span></SectionTitle>
          <div className="contact-main">
            <p>HAVE A PROJECT IN MIND?</p><h2>MAKE IT<br /><em>VISIBLE.</em></h2>
            <a className="email-link glow-card" href="mailto:867611697@qq.com"><span>867611697@qq.com</span><span className="email-arrow"><Arrow diagonal /></span></a>
          </div>
          <div className="contact-bottom">
            <div><span>PHONE</span><a href="tel:+8618610509951">+86 186 1050 9951</a></div>
            <div><span>LOCATION</span><p>BEIJING / CHINA</p></div>
            <div><span>SERVICE</span><p>VISUAL · AI · BRAND</p></div>
            <a href="#top" className="back-top">BACK TO TOP <Arrow /></a>
          </div>
          <div className="footer-line"><span>© 2026 PENG CHAO</span><span>DESIGNED AS A SYSTEM</span></div>
        </div>
      </footer>

      {activeProject && (
        <div className="project-modal" role="dialog" aria-modal="true" aria-label={`${activeProject.title}项目详情`}>
          <button className="modal-backdrop" type="button" onClick={() => setActiveProject(null)} aria-label="关闭项目详情" />
          <div className="modal-panel">
            <button className="modal-close" type="button" onClick={() => setActiveProject(null)} aria-label="关闭"><span /><span /></button>
            <div className="modal-copy"><div><span>{activeProject.no}</span><span>{activeProject.year}</span></div><small>{activeProject.en}</small><h2>{activeProject.title}</h2><p>{activeProject.description}</p><div className="modal-tags">{activeProject.tags.map((tag)=><span key={tag}>{tag}</span>)}</div></div>
            <div className="modal-gallery">{activeProject.images.map((image,index)=><img src={image} alt={`${activeProject.title}详情 ${index+1}`} loading="lazy" decoding="async" key={image}/>)}</div>
          </div>
        </div>
      )}
    </main>
  )
}

export default App
