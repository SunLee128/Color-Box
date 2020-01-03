# Color Box
React app displays random colors on click.
This app violates the “children are dumber than their parents” rule of thumb, since each box will probably need to have its own color state, while the parent container doesn’t really need to be smart. 
It has two components
* Box: contains own onClick state.
* BoxContainer: creates array of Box component with random colors

#### Link
http://colorbox-by-sl.surge.sh/
