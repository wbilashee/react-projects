import React, { useState, useEffect } from "react";
import loadingImg from "../../images/loading.gif";
import { Link, useParams } from "react-router-dom";

export default function Cocktail() {
    const { id } = useParams();
    const [cocktail, setCocktail] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchSingleDrink = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
                const data = await response.json();

                if (data.drinks) {
                    const {
                        strDrink: name,
                        strDrinkThumb: image,
                        strAlcoholic: info,
                        strCategory: category,
                        strGlass: glass,
                        strInstructions: instructions,
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                    } = data.drinks[0]
                    const ingredients = [
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                    ];
                    const newCocktail = {
                        name,
                        image,
                        info,
                        category,
                        glass,
                        instructions,
                        ingredients,
                    }
                    setCocktail(newCocktail);
                } else {
                    setCocktail(null);
                }
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        }
        fetchSingleDrink();
    }, [id]);

    if (loading) {
        return <div className="page-loading">
            <img src={loadingImg} alt="loading" />
        </div>
    }

    if (!cocktail) {
        return <h2 className="title drink-title">No cocktail found</h2>
    } else {
        const { name, image, info, category, glass, instructions, ingredients } = cocktail;
        return (
            <main>
                <h2 className="title drink-title">{name}</h2>
                <section className="single-drink">
                    <img src={image} className="drink-img" alt={name} />
                    <article className="drink">
                        <p><span className="drink-data">Name:</span>{name}</p>
                        <p><span className="drink-data">Info:</span>{info}</p>
                        <p><span className="drink-data">Category:</span>{category}</p>
                        <p><span className="drink-data">Glass:</span>{glass}</p>
                        <p><span className="drink-data">Instructions:</span>{instructions}</p>
                        <p><span className="drink-data">Ingredients:</span>
                            {ingredients.map((item, index) => {
                                return <span key={index}>{item}, </span>;
                            })}
                        </p>
                        <Link to={"/Cocktails"}>
                            <button className="drink-btn">all cocktails</button>
                        </Link>
                    </article>
                </section>
            </main>
        )
    }
}
