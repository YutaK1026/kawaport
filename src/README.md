# 使い方

## プロダクトを追加する方法

1. `src/product/products-list.json`に、プロダクトのタイトル、key、alt などを記述する
2. `public/project/[product name]`に、表示したい画像を配置する。
3. `src/product/[page name]`に、表示したいプロダクトのページを作成し、中の data.json にプロダクト詳細に記入したい内容を書く。

## スキルを追加する方法

1. `component/Skill/data.json`に、スキルの imgSrc(key), name, description, period を記述する
2. `public/skill/[skill name]`に、表示したい画像を配置する。

## 経歴を追加する方法

1. `src/components/About/experiences.json`に、他経歴とフォーマットを揃えて追加する

# プロダクトに関する説明

## コンポーネント駆動

本プロダクトは，コンポーネント駆動開発を意識して開発しています．
各ページは全てコンポーネントの組み合わせで作成されており，汎用コンポーネントは`src/components/Home`，ui の最小単位を`src/components/atom`に配置し，個々のページで使用するコンポーネントは`src/components/{ページ名}`に記述しています．
コンポーネント単位で動作テストをするために，storybook を導入しており，開発体験を向上させています．

(2025 年 6 月追記)最近は，さらにディレクトリ構成についても勉強しており，この構成とは異なるものを使うことが多いです．時間が取れる際に修正しようと思います．
