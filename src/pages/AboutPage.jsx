import React, { Component } from 'react'
import { Page } from 'react-onsenui'
import AboutToolbar from '../components/AboutToolbar'

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
        <p>鹿児島市の灰を捨てる場所（宅地内降灰指定置場）を探すためのアプリです。</p>
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
      </Page>
    )
  }
}
