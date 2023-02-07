import React, { useEffect } from 'react';
import { useDispatch } from "react-redux"
import styles from './styles.module.scss'
import { BiSearch } from "react-icons/bi"
import { getWeather } from '../../store/actions/weatherActions'
import citiesData from '../../assets/jsonData/citiesData.json'

export default function Search() {

    const dispatch = useDispatch()

    const sortedCitiesData = citiesData.sort((a, b) => {
        if (a.city < b.city) return -1
        if (a.city > b.city) return 1
        return 0
    })

    // The autocomplete function takes two arguments, the text field element and an array of possible autocompleted values
    function autocomplete(input, array) {
        var currentFocus;
        // Execute a function when someone writes in the text field:
        input.addEventListener("input", function (e) {
            var a, b, i, val = this.value;
            // Close any already open lists of autocompleted values
            closeAllLists();
            if (!val) { return false; }
            currentFocus = -1;
            // Create a DIV element that will contain the items (values)
            a = document.createElement("DIV");
            a.setAttribute("id", this.id + "autocomplete_list");
            a.setAttribute("class", styles.autocomplete_items);
            // Append the DIV element as a child of the autocomplete container
            this.parentNode.appendChild(a);
            // For each item in the array...
            for (i = 0; i < array.length; i++) {
                // Check if the item starts with the same letters as the text field value
                if (array[i].city.substr(0, val.length).toUpperCase() === val.toUpperCase()) {
                    // Create a DIV element for each matching element
                    b = document.createElement("DIV");
                    // Make the matching letters bold
                    b.innerHTML = "<strong>" + array[i].city.substr(0, val.length) + "</strong>";
                    b.innerHTML += array[i].city.substr(val.length);
                    // Insert a input field that will hold the current array item's value
                    b.innerHTML += "<input type='hidden' value='" + array[i].city + "'>";
                    // Execute a function when someone clicks on the item value (DIV element)
                    b.addEventListener("click", function (e) {
                        // Insert the value for the autocomplete text field
                        input.value = this.getElementsByTagName("input")[0].value;
                        // Close the list of autocompleted values,
                        //(or any other open lists of autocompleted values
                        closeAllLists();
                    });
                    a.appendChild(b);
                }
            }
        });
        // Execute a function presses a key on the keyboard
        input.addEventListener("keydown", function (e) {
            var x = document.getElementById(this.id + "autocomplete_list");
            if (x) x = x.getElementsByTagName("div");
            if (e.keyCode === 40) {
                currentFocus++;
                addActive(x);
            } else if (e.keyCode === 38) {
                currentFocus--;
                addActive(x);
            } else if (e.keyCode === 13) {
                if (currentFocus > -1) {
                    if (x) x[currentFocus].click();
                }
            }
        });
        function addActive(x) {
            // A function to classify an item as "active"
            if (!x) return false;
            // Start by removing the "active" class on all items
            removeActive(x);
            if (currentFocus >= x.length) currentFocus = 0;
            if (currentFocus < 0) currentFocus = (x.length - 1);
            // Add class "autocomplete-active"
            x[currentFocus].classList.add(styles.autocomplete_active);
        }
        // A function to remove the "active" class from all autocomplete items
        function removeActive(x) {
            for (var i = 0; i < x.length; i++) {
                x[i].classList.remove(styles.autocomplete_active);
            }
        }
        // Close all autocomplete lists in the document, except the one passed as an argument
        function closeAllLists(element) {
            var x = document.getElementsByClassName(styles.autocomplete_items);
            for (var i = 0; i < x.length; i++) {
                if (element !== x[i] && element !== input) {
                    x[i].parentNode.removeChild(x[i]);
                }
            }
        }
        // Execute a function when someone clicks in the document
        document.addEventListener("click", function (e) {
            closeAllLists(e.target);
        });
    }

    const onSubmit = e => {
        e.preventDefault()
        const { target } = e
        const [filtered] = sortedCitiesData.filter(item => item.city.toLowerCase() === target.input.value.toLowerCase())
        if (filtered) {
            const data = {
                city: filtered.city,
                countryCode: filtered.countryCode
            }
            dispatch(getWeather(data))
        }
        target.input.value = ''
    }

    useEffect(() => {
        autocomplete(document.getElementById("input"), sortedCitiesData);
    }, [])

    return (
        <form autoComplete="off" className={styles.search} onSubmit={onSubmit}>
            <div className={styles.autocomplete}>
                <input
                    id="input"
                    type="text"
                    placeholder="Buscar" />
            </div>
            <div>
                <button type="submit"><BiSearch /></button>
            </div>
        </form>
    );
}