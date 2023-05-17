export const ContactForm = () => {
    const budgetRangeList = [
        {
            text: "Choose budget range",
            value: ""
        },
        {
            text: "less than $1000",
            value: "less than $1000"
        }, {
            text: "$1000 - $3000",
            value: "$1000 - $3000"
        }, {
            text: "greater than $3000",
            value: "greater than $3000"
        }
    ]

    const projectTimelineRangeList = [
        {
            text: "Choose project timeline",
            value: ""
        },
        {
            text: "a few hours",
            value: "a few hours"
        }, {
            text: "1 month",
            value: "1 month"
        }, {
            text: "2 - 3 months",
            value: "greater than $3000"
        },{
            text: "3 - 6 months",
            value: "3 - 6 months",
        },{
            text: "more than 6 months",
            value: "more than 6 months",
        }
    ]
    return (
        <div className="lg:w-full flex flex-col gap-4">
            <div className="flex flex-col gap-4">
                <div className="form-input-wrapper">
                    <label htmlFor="name" className="form-label" >Name</label>
                    <input id="name" type="text" placeholder="John Amaka" className="form-input" />
                </div>
                <div className="form-input-wrapper">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input id="email" type="text" placeholder="john@gmail.com" className="form-input" />
                </div>
            </div>

            <div className="form-input-wrapper">
                <label htmlFor="projectDetails"  className="form-label">Project Details</label>
                <textarea id="projectDetails"
                    placeholder="john@gmail.com" className="form-input h-[12rem] resize-none"
                >
                </textarea>
            </div>

            <div className="flex flex-col gap-4">
                <div className="form-input-wrapper">
                    <label htmlFor="budget" className="form-label">Budget Range</label>
                    <select id="budget" className="form-select">
                        {
                            budgetRangeList.map(option => (
                                <>
                                    <option value={option.value}>{option.text}</option>
                                </>
                            ))
                        }
                    </select>
                </div>

                <div className="form-input-wrapper">
                    <label htmlFor="projectTimeline" className="form-label">Projetct Timeline</label>
                    <select id="projectTimeline" className="form-select">
                        {
                            projectTimelineRangeList.map(option => (
                                <>
                                    <option value={option.value}>{option.text}</option>
                                </>
                            ))
                        }
                    </select>
                </div>

                <div className="form-input-wrapper">
                    <button className="submit-btn">Continue</button>
                </div>
            </div>
        </div>
    )
}