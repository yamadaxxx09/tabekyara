// assets/friends.js

const FRIEND_KEY = "friends_list";

// フレンド一覧を取得
export function getFriends() {
    const data = localStorage.getItem(FRIEND_KEY);
    return data ? JSON.parse(data) : [];
    }

// フレンド追加
export function addFriend(friend) {
    const friends = getFriends();

  // 重複チェック（すでに追加済みなら何もしない）
if (friends.some(f => f.id === friend.id)) {
    alert(`${friend.name} さんはすでにフレンドです！`);
    return;
}

    friends.push(friend);
    localStorage.setItem(FRIEND_KEY, JSON.stringify(friends));
}

// フレンド削除
export function removeFriend(id) {
    const friends = getFriends().filter(f => f.id !== id);
    localStorage.setItem(FRIEND_KEY, JSON.stringify(friends));
}

// 全削除（デバッグ用）
    export function clearFriends() {
    localStorage.removeItem(FRIEND_KEY);
}
