
exports('Notify', function(args)
	TriggerClientEvent('Pastor:SendNotify', args.target, args)
end)

