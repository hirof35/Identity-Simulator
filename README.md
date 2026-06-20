# Node.js 恒等式シミュレータ (Identity Simulator)

Node.js環境で、数学的な「恒等式（常に成り立つ数式）」が本当に正しいかを検証・シミュレーションするためのサンプルプログラムです。

アプローチの異なる2種類の検証アルゴリズム（数値的アプローチと代数的アプローチ）を実装しています。
<img width="947" height="346" alt="スクリーンショット 2026-06-21 082618" src="https://github.com/user-attachments/assets/ab3e5020-057a-4998-b501-8959704903e8" />

## 🚀 機能特徴

1. **数値的検証 (Monte Carlo Approach)**
   * ランダムな実数（ラジアンなど）を大量に生成し、数式に代入して検証します。
   * 浮動小数点数特有の計算誤差（丸め誤差）を考慮した近似比較（$\epsilon$ 検証）を行います。
   * 例：$\sin^2(x) + \cos^2(x) = 1$ の検証

2. **代数的検証 (Symbolic Approach)**
   * 数式処理ライブラリ `mathjs` を使用し、数式を抽象構文木（AST）に展開・簡約化して厳密に証明します。
   * 例：$(x + y)^2 = x^2 + 2xy + y^2$ の検証

---

## 🛠 動作環境・セットアップ

### 前提条件
* [Node.js](https://nodejs.org/) (v16以上推奨)

### インストール
リポジトリをクローンまたはダウンロードし、依存ライブラリをインストールします。

```bash
# プロジェクトディレクトリに移動
cd nodejs-identity-simulator

# 依存ライブラリ (mathjs) のインストール
npm install
🏃‍♂️ 実行方法1. 数值的検証シミュレーションランダムな数値を1,000,000回代入し、誤差の範囲内で常に式が成り立つかをテストします。Bashnode identity_simulation.js
2. 代数的検証（数式処理）数式を代数的に展開し、左右の辺が構造的に同一であるかを検証します。Bashnode mathjs_identity.js
📂 ファイル構成Plaintext├── identity_simulation.js  # 数值的検証（三角関数を例にしたランダムサンプリング）
├── mathjs_identity.js      # 代数的検証（mathjsを用いた因数分解・展開の検証）
├── package.json            # プロジェクト設定および依存関係定義
└── README.md               # 本ファイル
📊 技術的な解説浮動小数点数とイプシロン ($\epsilon$)identity_simulation.js では、JavaScript（IEEE 754 倍精度浮動小数点数）の仕様上、Math.sin(x) などの計算に微小な誤差が含まれます。そのため、単純な === による比較ではなく、以下の数式を用いて誤差が許容範囲内（1e-12）であるかを判定しています。$$| \text{Left Side} - \text{Right Side} | < \epsilon$$抽象構文木 (AST) による簡約化mathjs_identity.js では、文字列として入力された数式をパースし、数学的なルールに基づいて最適化（簡約化）しています。これにより、人間が記述した異なるアプローチの数式が「本質的に同じものであるか」をコンピュータに判定させています。
