/**
 * 主要JavaScript文件
 */

// 当文档加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  // 初始化打字效果
  initTyped();
  
  // 初始化技能条动画
  initSkillBars();
  
  // 创建雪花效果
  createSnowflakes();
  
  // 添加滚动动画
  addScrollAnimation();
  
  // 初始化Fancybox配置
  initFancybox();
});

// 初始化打字效果
function initTyped() {
  if (typeof Typed !== 'undefined' && document.querySelector('.typed-text')) {
    new Typed('.typed-text', {
      strings: ['阳光下做个孩子，风雨里做个大人', 'Be tough in bad times and be true in good times'],
      startDelay: 300,
      typeSpeed: 100,
      loop: true,
      backSpeed: 50,
      showCursor: true
    });
  }
}

// 初始化技能条动画
function initSkillBars() {
  const skillBars = document.querySelectorAll('.skill-bar-fill');
  
  // 检测元素是否在视窗内
  const isInViewport = function(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };
  
  // 给在视窗内的技能条添加宽度
  const handleScroll = function() {
    skillBars.forEach(skillBar => {
      if (isInViewport(skillBar) && !skillBar.classList.contains('animated')) {
        skillBar.style.width = skillBar.getAttribute('data-width');
        skillBar.classList.add('animated');
      }
    });
  };
  
  // 监听滚动事件
  window.addEventListener('scroll', handleScroll);
  
  // 初始加载检查
  handleScroll();
}

// 初始化Fancybox配置
function initFancybox() {
  if (typeof $.fancybox !== 'undefined') {
    // 自定义Fancybox配置
    $.fancybox.defaults.animationEffect = "zoom";
    $.fancybox.defaults.transitionEffect = "fade";
    $.fancybox.defaults.buttons = [
      "zoom",
      "slideShow",
      "fullScreen",
      "download",
      "thumbs",
      "close"
    ];
  }
}

// 创建雪花效果
function createSnowflakes() {
  const snowflakesContainer = document.querySelector('.snowflakes-container');
  if (!snowflakesContainer) return;
  
  const snowflakesCount = 50;
  const symbols = ['❄', '❅', '❆', '✻', '✼', '❄', '❅', '❆', '✻', '✼'];
  
  for (let i = 0; i < snowflakesCount; i++) {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    snowflake.style.left = `${Math.random() * 100}%`;
    snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`;
    snowflake.style.animationDelay = `${Math.random() * 5}s`;
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = `${Math.random() * 1.5 + 0.5}em`;
    snowflakesContainer.appendChild(snowflake);
  }
}

// 添加滚动动画
function addScrollAnimation() {
  const elements = document.querySelectorAll('.fade-in');
  
  // 检测元素是否在视窗内
  const isInViewport = function(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };
  
  // 处理滚动事件，为可见元素添加动画
  const handleScroll = function() {
    elements.forEach(element => {
      if (isInViewport(element) && !element.classList.contains('animated')) {
        element.classList.add('animated');
        element.style.animationPlayState = 'running';
      }
    });
  };
  
  // 监听滚动事件
  window.addEventListener('scroll', handleScroll);
  
  // 初始加载检查
  handleScroll();
}

// 浏览器标题切换效果
(function() {
  const originalTitle = document.title;
  let titleTime;
  
  document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
      document.title = '╭(°A°`)╮ 你怎么不看我了呜呜呜';
      clearTimeout(titleTime);
    } else {
      document.title = '(ฅ>ω<*ฅ) 嘿嘿 ~' + originalTitle;
      titleTime = setTimeout(function() {
        document.title = originalTitle;
      }, 2000);
    }
  });
})();