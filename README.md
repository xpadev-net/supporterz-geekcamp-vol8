※セットアップの4番、開発の3~4番はエディターのgit管理機能を使用しても構いません

## セットアップ方法

1. Nodejsのインストール   
https://www.sejuku.net/blog/72545  
2. gitのインストール    
https://www.sejuku.net/blog/73444
3. プロジェクトのフォーク  
右上の`Fork`ボタンを押す  
確認画面が出るので`create fork`で作成
4. プロジェクトのクローン  
`git clone <フォークした自分のリポジトリ>`
5. パッケージのインストール  
`yarn`

## 開発方法

1. 開発用サーバーの起動  
`yarn dev`
2. ファイルを編集  
変更を保存すると自動でリロードして反映される
3. 変更をコミットする  
`git add .`  
`git commit`  
4. 変更をGithub上にpushする  
`git push`
5. PRを出す  
GitHubを開いて自分のリポジトリから`Contribute`を押すと`Open pull request`ボタンが表示されるのでそれを押し、  
フォームにタイトルと変更内容を記載して`Create pull request`を押してください
6. 修正(ない場合もあり)
もらったPRは私が確認します  
問題があればここを直してくださいというリクエストを出すので、  
2 ~ 4番の作業を行ってください  
pushすると開いているPRに自動的にそのコミットが反映されます
7. マージ  
PRに問題がなくなったらメインのリポジトリにマージします