class Meal {
    constructor(
        id,
        categoryIds,
        title,
        affordability,
        complexity,
        imageurl,
        duration,
        ingredients,
        steps,
        isGlutenFree,
        isVegan,
        isVeg,
        isLactoseFree
    ) {
        this.id = id;
        this.categoryIds = categoryIds;
        this.title = title;
        this.affordability = affordability;
        this.complexity = complexity;
        this.imageurl = imageurl;
        this.duration = duration;
        this.ingredients = ingredients;
        this.steps = steps;
        this.isGlutenFree = isGlutenFree;
        this.isVegan = isVegan;
        this.isVeg = isVeg;
        this.isLactoseFree = isLactoseFree;

    }
}

export default Meal;