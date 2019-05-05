import React, { Component } from 'react'
import { Page } from 'react-onsenui'
import AboutToolbar from '../components/AboutToolbar'
import './AboutPage.css'

export default class AboutPage extends Component {
  state = {
    links: [
      {
        title: '宅地内降灰指定置場の設置要望書｜鹿児島市',
        url: 'http://www.city.kagoshima.lg.jp/kensetu/douro/douroiji/machizukuri/kotsu/doro/iji/kohai/setchi.html',
      },
      {
        title: '克灰袋の提供｜鹿児島市',
        url: 'http://www.city.kagoshima.lg.jp/kankyo/kankyo/eisei/kurashi/sekatsukankyo/kazanbai/kokuhaibukuro.html',
      },
    ],
    refs: [
      {
        title: '鹿児島市オープンデータ｜鹿児島市 3-16 宅地内降灰指定置場データ',
        url: 'https://www.city.kagoshima.lg.jp/jousys/opendata.html',
        content: '宅地内降灰指定置場の表示データとして使用',
      },
      {
        title: '地理院タイル',
        url: 'https://maps.gsi.go.jp/development/ichiran.html',
        content: '地図データとして使用',
      },
      {
        title: 'うちわエディタ',
        url: 'http://smaplan.pczuki.com/utiwaeditor.php',
        content: 'アイコン作成で使用',
      },
      {
        title: 'サインボードのシルエット | 無料のAi・PNG白黒シルエットイラスト',
        url: 'https://www.silhouette-illust.com/illust/42245',
        content: '地図上のマーカーのベースとして使用',
      },
    ],
  }

  render() {
    const { links, refs } = this.state
    return (
      <Page
        renderToolbar={() => <AboutToolbar />}
      >
        <div className="about-page">
          <p>鹿児島市の降灰を捨てる場所（宅地内降灰指定置場）を探すためのアプリです。</p>
          <ul>
            <li>灰を捨てる場所がわからない</li>
            <li>近くの宅地内降灰指定置場を確認したい</li>
          </ul>
          <p>といったときにご利用ください。</p>
          <h3>使い方</h3>
          <p>地図を自由に操作して探すだけでなく、右下のGPSアイコンをタップして現在地に飛ぶこともできます。 </p>
          <p>※GPSを利用する場合は、このアプリでGPSを使えるように許可する必要があります。</p>
          <p>看板をタップすると、その置場の名前を確認することができます。</p>
          <h3>注意</h3>
          <p>このアプリは非公式です。鹿児島市とは関係ありませんのでご注意ください。</p>
          <h3>リンク集</h3>
          <ul>
            {links.map((link, key) => (
              <li key={key}>
                <a href={link.url} target="_blank" rel="noreferrer noopener">{link.title}</a>
              </li>
            ))}
          </ul>
          <h3>使ったもの</h3>
          <ul>
            {refs.map((ref, key) => (
              <li key={key}>
                <a href={ref.url} target="_blank" rel="noreferrer noopener">{ref.title}</a>
                <ul>
                  <li>{ref.content}</li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </Page>
    )
  }
}
