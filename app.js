let movies = [];
let movieId = 0;
$(function() {
    $('.review-form').on("submit", function(evt){
        evt.preventDefault
        let title = $('.title-input').val();
        let rating = $('.rating-input').val();
        
        let movieValues = `${ title , rating , movieId }`;
        const appendHTML = addMovieValues(movieValues);
    
        movieId++
        movies.push(movieValues);
        
        $("#movie-table").append(appendHTML);
        $("#review-form").trigger("reset");
        
    
    
    });
    
    $("tbody").on("click", "delete-movie-values", function(evt){
        let removeIndex = movies.findIndex(movie => movie.movieId === +$(evt.target).data("deleteMovie"))
    
        movies.splice(removeIndex, 1)
    
        $(evt.target)
            .closest("tr")
            .remove();
    })    
})

function addMovieValues(value) {
    return `
        <tr>
            <td>${value.title}</td>
            <td>${value.rating}</td>
            <td>
                <button class="delete-movie-values" data-delete-id=${value.movieId}>
                    Delete
                </button>
            </td>
        </tr>
        `;
}