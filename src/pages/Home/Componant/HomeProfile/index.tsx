import { FadeInComponent } from "../../../../components/FadeInComponent"
import "./HomeProfile.css"

export const HomeProfile = () => {
  return (
    <section>
      <div className="c-homeProfile">
        <div className="c-homeProfile-card">
            <div className="c-homeProfile-card-block">
              <FadeInComponent>
                <figure>
                    <div className="c-homeProfile-card-image">
                        <p><img src="profile-img1.jpg" alt="" /></p>
                        <h2 className="c-homeProfile-card-title">PROFILE</h2>
                    </div>
                    <figcaption>
                        <p className="c-homeProfile-card-nameJp">岡田 茂之</p>
                        <p className="c-homeProfile-card-nameEn">Shigeyuki Okada</p>
                        <p className="c-homeProfile-card-nameText">デザインもできますが、最近ではコーディング（Javascript）が面白く、毎日のようにReactやNode.js、Firebaseを活用したサイト制作が趣味になっています。<br />
                        <br />
                        歳がどうこうおっしゃる方もいますが、年齢は関係ないと思っています。この業界は学びや挑戦が必要で、それを否定することはこの業界ではやっていけないと思っています。辛い気持ちで、学んでも成長しないと思いますので、楽しくさせていただいています。<br />
                        <br />
                        このサイト自体はMongoDB・Express・React.js・Node.jsで作成しています。</p>
                    </figcaption>
                </figure>
              </FadeInComponent>
            </div>
            <div className="c-homeProfile-card-block">
              <FadeInComponent>
                <figure>
                    <div className="c-homeProfile-card-image">
                        <p><img src="profile-img2.jpg" alt="" /></p>
                        <h2 className="c-homeProfile-card-title">SKILL</h2>
                    </div>
                    <figcaption>
                      <dl className="c-homeProfile-card-block-def">
                        <dt>言語</dt>
                        <dd>HTML5・CSS3・SCSS・Javascript<br />
                        ・React.js・Node.js・Mysql</dd>
                      </dl>
                      <dl className="c-homeProfile-card-block-def">
                        <dt>CMS</dt>
                        <dd>Wordpress</dd>
                      </dl>
                      <dl className="c-homeProfile-card-block-def">
                        <dt>フレームワーク</dt>
                        <dd>Laravel</dd>
                      </dl>
                      <dl className="c-homeProfile-card-block-def">
                        <dt>デザインツール</dt>
                        <dd>Photoshop・Illustrator・AdobeXD</dd>
                      </dl>
                      <dl className="c-homeProfile-card-block-def">
                        <dt>その他</dt>
                        <dd>Git・Gulp</dd>
                      </dl>
                    </figcaption>
                  </figure>
                </FadeInComponent>
            </div>
          </div>
      </div>
    </section>
  )
}
