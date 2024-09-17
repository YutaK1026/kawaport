# 使い方

## atomic design の活用方法

本プロダクトでは、atomic design を採用し、atom, molecule, organism, template, page の５段階に分けて component を作成している。

- atom: 最も細かいパーツ。汎用性が高く、これを組み合わせて様々なコンポーネントを作成する。
- molecule: atom を使用して具体的なコンポーネントを記述する。organism ほどではない粒度のものがここに配置されている。このコンポーネントを import してそのままページに使うことはない。
- organism: 実際にページで使用するコンポーネントを記述する。molecule, atom を組み合わせて作成する。
- template: ページのテンプレートをここに記述する。
- pages: 実際にページとして表示するコンポーネントをここに記述する。app/[page]では、これを import して表示する

このようにして、再利用性・保守性が高く、依存関係が明確となるコードを記述している。

## プロダクトを追加する方法

1. `/component/pages/product/products.json`に、プロダクトのタイトル、key、alt などを記述する
2. `/component/pages/product/hook.ts`に、プロダクトの表示画像の path を記述し、import するようにコードを修正する
3. 適切な場所にプロダクト詳細を記述できるようにする。
