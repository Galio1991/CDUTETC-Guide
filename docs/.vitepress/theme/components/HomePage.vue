<script setup>
import { useData } from 'vitepress'
const { frontmatter } = useData()
</script>

<template>
  <div class="home-page">
    <!-- Hero 区域 -->
    <section class="hero">
      <div class="hero-bg"></div>
      <div class="hero-content">
        <h1 class="hero-title">
          <span class="hero-title-main">成理工程生存指南</span>
          <span class="hero-title-amp">&</span>
          <span class="hero-title-sub">飞跃手册</span>
        </h1>
        <p class="hero-tagline">成都理工大学工程技术学院学生知识库</p>
        <p class="hero-desc">由贴吧吧务团队运营，同学们共建共享</p>
        <div class="hero-actions">
          <a href="/survival/" class="action-btn primary">进入生存指南</a>
          <a href="/leap/" class="action-btn secondary">进入飞跃手册</a>
        </div>
      </div>
      <div class="hero-decoration">
        <div class="geo geo-1"></div>
        <div class="geo geo-2"></div>
        <div class="geo geo-3"></div>
      </div>
    </section>

    <!-- 前言 -->
    <section class="section preface">
      <div class="container">
        <h2 class="section-title">前言</h2>
        <div class="preface-content">
          <p>
            欢迎来到成理工程生存指南 & 飞跃手册。这是一份由成都理工大学工程技术学院贴吧吧务团队发起、
            同学们共同维护的知识库，旨在为在校生和新生提供实用的校园生活指南，
            以及为即将升学或就业的同学提供经验参考。
          </p>
          <p>
            无论你是刚入学的新生，还是即将毕业的学长学姐，都欢迎在这里找到你需要的信息，
            也欢迎分享你的经验，帮助后来者少走弯路。
          </p>
        </div>
      </div>
    </section>

    <!-- 导航卡片 -->
    <section class="section navigation">
      <div class="container">
        <div class="nav-cards">
          <a href="/survival/" class="nav-card survival">
            <div class="card-icon">🎒</div>
            <h3>生存指南</h3>
            <p>入学须知、学业攻略、校园生活、常见问题</p>
            <span class="card-link">开始阅读 →</span>
          </a>
          <a href="/leap/" class="nav-card leap">
            <div class="card-icon">🚀</div>
            <h3>飞跃手册</h3>
            <p>考研、出国、就业经验分享，学长学姐亲身经历</p>
            <span class="card-link">开始阅读 →</span>
          </a>
        </div>
      </div>
    </section>

    <!-- 贴吧 & 社区信息 -->
    <section class="section community">
      <div class="container">
        <h2 class="section-title">加入我们</h2>
        <div class="info-grid">
          <div class="info-card">
            <div class="info-icon">💬</div>
            <h4>百度贴吧</h4>
            <p>成都理工大学工程技术学院吧</p>
            <a href="https://tieba.baidu.com/f?kw=成都理工大学工程技术学院" target="_blank" rel="noopener" class="info-link">
              前往贴吧 →
            </a>
          </div>
          <div class="info-card">
            <div class="info-icon">👥</div>
            <h4>迎新群</h4>
            <p>QQ 群号：待公布</p>
            <span class="info-note">新生入学后可加入</span>
          </div>
          <div class="info-card">
            <div class="info-icon">✍️</div>
            <h4>投稿分享</h4>
            <p>分享你的经验，帮助后来者</p>
            <a href="/contribute" class="info-link">了解投稿方式 →</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-page {
  max-width: 100%;
  overflow-x: hidden;
}

/* ===== Hero ===== */
.hero {
  position: relative;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 24px;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #1a237e 0%, #283593 40%, #3949ab 70%, #1a237e 100%);
  z-index: 0;
}

.hero-bg::after {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 600px;
  height: 600px;
  background: rgba(211, 47, 47, 0.15);
  border-radius: 50%;
  filter: blur(80px);
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: #fff;
  max-width: 700px;
}

.hero-title {
  margin: 0 0 24px;
  line-height: 1.2;
}

.hero-title-main {
  display: block;
  font-size: 3rem;
  font-weight: 800;
  letter-spacing: 2px;
}

.hero-title-amp {
  display: block;
  font-size: 1.5rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.6);
  margin: 8px 0;
}

.hero-title-sub {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  color: #ff6659;
}

.hero-tagline {
  font-size: 1.25rem;
  margin: 0 0 8px;
  opacity: 0.9;
}

.hero-desc {
  font-size: 1rem;
  margin: 0 0 40px;
  opacity: 0.7;
}

.hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.action-btn {
  display: inline-block;
  padding: 14px 32px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
}

.action-btn.primary {
  background: #d32f2f;
  color: #fff;
}

.action-btn.primary:hover {
  background: #b71c1c;
  transform: translateY(-2px);
}

.action-btn.secondary {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.action-btn.secondary:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-2px);
}

/* 几何装饰 */
.hero-decoration {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.geo {
  position: absolute;
  border: 2px solid rgba(255, 255, 255, 0.1);
}

.geo-1 {
  width: 200px;
  height: 200px;
  top: 10%;
  left: 5%;
  transform: rotate(45deg);
}

.geo-2 {
  width: 120px;
  height: 120px;
  bottom: 15%;
  right: 10%;
  border-radius: 50%;
}

.geo-3 {
  width: 80px;
  height: 80px;
  top: 20%;
  right: 15%;
  transform: rotate(15deg);
}

/* ===== Sections ===== */
.section {
  padding: 80px 24px;
}

.container {
  max-width: 960px;
  margin: 0 auto;
}

.section-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--vp-c-brand-1);
  margin: 0 0 32px;
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 60px;
  height: 3px;
  background: var(--color-accent);
  transform: skewX(-20deg);
}

/* ===== 前言 ===== */
.preface {
  background: var(--vp-c-bg);
}

.preface-content p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--vp-c-text-1);
  margin: 0 0 16px;
}

/* ===== 导航卡片 ===== */
.navigation {
  background: var(--vp-c-bg-soft);
}

.nav-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

.nav-card {
  display: block;
  padding: 32px;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
}

.nav-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
}

.nav-card.survival:hover {
  border-color: #3949ab;
}

.nav-card.leap:hover {
  border-color: #d32f2f;
}

.card-icon {
  font-size: 2.5rem;
  margin-bottom: 16px;
}

.nav-card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0 0 8px;
}

.nav-card p {
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
  margin: 0 0 16px;
  line-height: 1.6;
}

.card-link {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
}

/* ===== 社区信息 ===== */
.community {
  background: var(--vp-c-bg);
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
}

.info-card {
  padding: 28px;
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
  text-align: center;
  background: var(--vp-c-bg-soft);
}

.info-icon {
  font-size: 2rem;
  margin-bottom: 12px;
}

.info-card h4 {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0 0 8px;
}

.info-card p {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin: 0 0 12px;
}

.info-link {
  display: inline-block;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  text-decoration: none;
}

.info-link:hover {
  color: var(--color-accent);
}

.info-note {
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
}

/* ===== 暗色模式 ===== */
.dark .hero-bg {
  background: linear-gradient(135deg, #0d1642 0%, #1a237e 40%, #283593 70%, #0d1642 100%);
}

/* ===== 响应式 ===== */
@media (max-width: 768px) {
  .hero {
    min-height: 50vh;
    padding: 60px 16px;
  }

  .hero-title-main {
    font-size: 2rem;
  }

  .hero-title-sub {
    font-size: 1.75rem;
  }

  .section {
    padding: 48px 16px;
  }
}
</style>
