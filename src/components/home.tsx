import React from "react";
import Header from "../page/header";
import Footer from "../page/footer";

export default class Home extends React.Component {

    render()  {
        return(
            <div>
                <Header/>
                <div className="hcContentContainer hcMarginBottom5">
                    <div className="hcBasicSideMargin hcMarginTop1 hcMarginBottom5">
                        <h2>Home</h2>
                        <div className="hcBlockText">
                            <p>“Class is meaningless,” says Sartre; however, according to Werther[3] , it is not so much class that is meaningless, but rather
                                the dialectic of class. Sontag suggests the use of the neosemantic paradigm of
                                narrative to read society. It could be said that Tilton[4]
                                implies that we have to choose between patriarchialist narrative and
                                Batailleist `powerful communication’.</p>

                            <p>Baudrillard uses the term ‘social realism’ to denote a self-falsifying
                                totality. In a sense, Lacan promotes the use of the neosemantic paradigm of
                                narrative to attack outdated, sexist perceptions of sexual identity.</p>

                            <p>The subject is interpolated into a social realism that includes language as
                                a whole. Thus, Lyotard’s critique of the neosemantic paradigm of narrative
                                holds that the law is part of the meaninglessness of consciousness.</p>

                            <p>Many theories concerning the role of the writer as reader exist. In a sense,
                                if social realism holds, we have to choose between the neosemantic paradigm of
                                narrative and the neocultural paradigm of consensus. </p>
                        </div>
                    </div>
                </div>

                <Footer/>
            </div>
        )
    }
}