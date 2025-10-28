// --- State (localStorage) ---
export const State = {
  get() { return JSON.parse(localStorage.getItem('tabekyara') || '{}'); },
  set(patch) { const next = { ...State.get(), ...patch }; localStorage.setItem('tabekyara', JSON.stringify(next)); return next; },
  clear() { localStorage.removeItem('tabekyara'); }
};

// --- UI helpers ---
export function initChrome() {
  // 戻るボタン
  const backBtn = document.getElementById('backBtn');
  if (backBtn) backBtn.onclick = () => history.back();

  // タブ活性化
  const page = document.body.dataset.page; // 例: "main" / "mypage"
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  const map = { home:'main', mypage:'mypage', accessory:'accessory', friends:'friends', settings:'settings' };
  let tabKey = '';
  if (['start','login','register','onboarding','onboarding-pet-select','onboarding-pet-name','onboarding-goal','onboarding-welcome','main'].includes(page)) tabKey = 'home';
  if (['mypage','accessory','friends','settings'].includes(page)) tabKey = page;
  if (tabKey) document.querySelector(`.tab[data-tab="${tabKey}"]`)?.classList.add('active');

  // タブの遷移
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const name = tab.getAttribute('data-tab');
      if (name === 'home') location.href = './main.html';
      else if (name === 'mypage') location.href = './mypage.html';
      else if (name === 'accessory') location.href = './accessory.html';
      else if (name === 'friends') location.href = './friends.html';
      else if (name === 'settings') location.href = './settings.html';
    });
  });

  // ヘルプ
  const helpBtn = document.getElementById('helpBtn');
  if (helpBtn) helpBtn.onclick = () => alert('MVPデモ：各ページは個別HTMLで構成。見た目と挙動は共通ファイルから適用。');
}
