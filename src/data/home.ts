import type { Feature, Ingredient, Recipe } from '../types/ui'

export const primaryFeatures: Feature[] = [
  {
    title: 'レシピ生成',
    description:
      '在庫、好み、調理時間からAIが献立候補を作成',
    action: '作りたい料理を探す',
    icon: 'spark',
    tone: 'green',
  },
  {
    title: '食材登録',
    description:
      '手入力、レシート撮影、画像認識で冷蔵庫に追加',
    action: '食材を追加する',
    icon: 'basket',
    tone: 'yellow',
  },
  {
    title: '買い物リスト',
    description:
      '足りない食材を自動でリスト化して予算で絞り込み',
    action: 'リストを見る',
    icon: 'list',
    tone: 'blue',
  },
  {
    title: '調理履歴',
    description:
      '作ったレシピ、お気に入り、使用量をまとめて確認',
    action: '履歴を開く',
    icon: 'clock',
    tone: 'red',
  },
]

export const secondaryFeatures: Feature[] = [
  {
    title: 'お気に入り',
    description: 'また作りたいレシピを保存',
    action: '保存済み',
    icon: 'heart',
    tone: 'red',
  },
  {
    title: 'アカウント設定',
    description: '言語、ログアウト、ユーザー管理',
    action: '設定',
    icon: 'settings',
    tone: 'slate',
  },
  {
    title: 'お問い合わせ',
    description: '気になる点やエラーを送信',
    action: '送信',
    icon: 'message',
    tone: 'violet',
  },
]

export const expiringIngredients: Ingredient[] = [
  { name: '鮭切り身', amount: '320g', status: '今日まで' },
  { name: '小松菜', amount: '1束', status: '明日まで' },
  { name: '牛乳', amount: '500ml', status: '残り2日' },
]

export const suggestedRecipes: Recipe[] = [
  {
    name: '鮭と小松菜の和風クリーム煮',
    meta: '25分 / 約420kcal',
    tags: ['期限優先', '和洋中', '牛乳消費'],
  },
  {
    name: '冷蔵庫整理の具だくさん鍋',
    meta: '15分 / 難易度かんたん',
    tags: ['時短', '在庫活用'],
  },
]

export const summaryItems = [
  {
    label: '登録食材',
    value: '18',
    note: '3件は期限が近い',
  },
  {
    label: '買い物メモ',
    value: '6',
    note: '予算フィルター対応',
  },
  {
    label: 'お気に入り',
    value: '12',
    note: 'よく作るレシピ',
  },
  {
    label: '通知',
    value: '2',
    note: '賞味期限の確認',
  },
]
