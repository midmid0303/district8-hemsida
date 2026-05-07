import os

path = r'c:\Users\jimmy\D( hemsid\style.css'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Refine Navbar
old_nav_block = """/* Navbar */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    padding: 30px 4%;
    background: linear-gradient(to bottom, rgba(0,0,0,0.9), transparent);
}"""

new_nav_block = """/* Navbar */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    padding: 20px 4%;
    background: linear-gradient(to bottom, rgba(0,0,0,0.9), transparent);
    backdrop-filter: blur(10px);
}"""

content = content.replace(old_nav_block, new_nav_block)

# Add new utilities
new_styles = """
/* Image Match Utilities */
.brand { display: flex; flex-direction: column; }
.brand-name { font-family: var(--font-display); font-size: 2.2rem; letter-spacing: 0.1rem; line-height: 1; }
.brand-sub { font-family: var(--font-main); font-size: 0.55rem; letter-spacing: 0.35rem; color: var(--red); margin-top: 5px; }
.nav-dragon { height: 55px; filter: drop-shadow(0 0 15px var(--red)); transition: var(--transition); }
.btn-nav-ticket { background: var(--red); color: var(--white); padding: 12px 28px; text-decoration: none; font-family: var(--font-main); font-size: 0.75rem; font-weight: 700; letter-spacing: 0.2rem; transition: var(--transition); }

.hero-title-stack { position: relative; margin-bottom: 50px; }
.title-enter { font-family: var(--font-display); font-size: clamp(4rem, 12vw, 13rem); line-height: 0.8; position: relative; z-index: 10; }
.title-main-row { display: flex; align-items: baseline; margin-top: -4vw; position: relative; }
.title-eighth { font-family: var(--font-display); font-size: clamp(6rem, 18vw, 22rem); color: var(--red); line-height: 0.8; margin-right: 30px; position: relative; z-index: 5; text-shadow: 0 0 60px rgba(255,0,0,0.4); }
.title-district { font-family: var(--font-display); font-size: clamp(5rem, 14vw, 16rem); line-height: 0.8; position: relative; z-index: 10; }

.hero-stats { display: flex; gap: 80px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 40px; margin-top: 60px; }
.stat-num { font-family: var(--font-display); font-size: 3.5rem; color: var(--red); line-height: 1; display: block; margin-bottom: 10px; }
.stat-label { font-family: var(--font-main); font-size: 0.65rem; letter-spacing: 0.2rem; color: var(--gray); text-transform: uppercase; }
"""

# Append to end
content += new_styles

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
