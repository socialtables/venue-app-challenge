/**
 * You shouldn't have to modify any of this file
 */

module.exports = `# Welcome to GraphiQL
#
# GraphiQL is an in-browser tool for writing, validating, and
# testing GraphQL queries.
#
# Type queries into this side of the screen, and you will see intelligent
# typeaheads aware of the current GraphQL type schema and live syntax and
# validation errors highlighted within the text.
#
# GraphQL queries typically start with a "{" character. Lines that starts
# with a # are ignored.
#
# An example GraphQL query might look like:

query getListing {
	listing {
		name
		contact {
			email_address
		}
		number_of_rooms
		total_meeting_space
		largest_meeting_room_capacity
		max_capacity
		images
	}
}

# Keyboard shortcuts:
#
#   Prettify Query:  Shift-Ctrl-P (or press the prettify button above)
#        Run Query:  Ctrl-Enter / Cmd-Enter (or press the play button above)
#    Auto Complete:  Ctrl-Space (or just start typing)
`;
